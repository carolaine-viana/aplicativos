import { Model, Q, RawRecord } from '@nozbe/watermelondb';
import database from '../base/db/DataBase';
import dataBaseError from '../constants/DataBaseError';
import { IDataBaseError, IJoinQueryParam } from '../types';
import { isArrayEmpty } from '../utils';

class ModelBase<RT extends Model, CT extends Model> extends Model {
  collection: ReturnType<typeof database.get>;

  constructor(private collectionName: string) {
    super();
    this.collection = database.get(this.collectionName);
  }

  async getAllLocal(): Promise<RT[] | void>;

  async getAllLocal(mapper: (r: RawRecord) => RT): Promise<RT[] | void>;

  async getAllLocal(mapper?: (r: RawRecord) => RT): Promise<RT[] | void> {
    try {
      const allRcords = await this.collection.query().fetch();
      if (mapper) {
        return allRcords.map((record: Model) => mapper(record._raw));
      }
      return allRcords as RT[];
    } catch (error) {
      Promise.reject<IDataBaseError>({
        ...dataBaseError.ERROR_ON_FIND,
        error,
      });
    }
  }

  async createLocal(newRecord: CT, idKey: keyof Partial<CT> = 'id'): Promise<CT | null | void> {
    try {
      let objectCreated;
      await database.action(async () => {
        objectCreated = await this.collection.create((record) => {
          Object.keys(newRecord).forEach((key) => {
            const value = newRecord[key as keyof CT];
            const modifiedRecord = record as CT;
            modifiedRecord[key as keyof CT] = value;
          });
          if (record._raw && newRecord[idKey]) {
            record._raw.id = String(newRecord[idKey]).toString() as unknown as string;
          }
        });
      });
      return objectCreated || null;
    } catch (error) {
      Promise.reject<IDataBaseError>({
        ...dataBaseError.ERROR_ON_CREATE,
        error,
      });
    }
  }

  async getById(id: string): Promise<RT | null | void> {
    try {
      const objectFound = await this.collection.find(id);
      return objectFound as RT;
    } catch (error) {
      Promise.reject<IDataBaseError>({
        ...dataBaseError.ERROR_ON_FIND,
        error,
      });
    }
  }

  async getByField(
    fieldName: string,
    value: string | number | boolean
  ): Promise<RT[] | null | void> {
    try {
      const records = await this.collection.query(Q.where(fieldName, value)).fetch();
      if (!isArrayEmpty(records)) {
        return records as RT[];
      }
      return null;
    } catch (error) {
      Promise.reject<IDataBaseError>({
        ...dataBaseError.ERROR_ON_FIND,
        error,
      });
    }
  }

  async findByField(
    fieldName: string,
    value: string | number | boolean
  ): Promise<RT | null | void> {
    try {
      const records = await this.getByField(fieldName, value);
      if (records) {
        return records[0] as RT;
      }
      return null;
    } catch (error) {
      Promise.reject<IDataBaseError>({
        ...dataBaseError.ERROR_ON_FIND,
        error,
      });
    }
  }

  async deleteAll(): Promise<void> {
    await this.database.action(async () => {
      try {
        const recordsDelete = await this.collections.get(this.collectionName).query().fetch();

        const deleteActions = recordsDelete.map((record) => record.prepareDestroyPermanently());

        await this.batch(...deleteActions);
      } catch (error) {
        Promise.reject<IDataBaseError>({
          ...dataBaseError.ERROR_ON_DELETE_ALL,
          error,
        });
      }
    });
  }

  async insertMany(records: CT[], idKey = 'id') {
    await this.database.action(async () => {
      try {
        const createActions = records.map(
          (newRecord): Model =>
            this.collections.get(this.collectionName).prepareCreate((record) => {
              Object.keys(newRecord).forEach((key) => {
                const value = newRecord[key as keyof CT];
                (record as CT)[key as keyof CT] = value;
              });
              if (newRecord[idKey as keyof Model]) {
                record._raw.id = newRecord[idKey as keyof Model].toString();
              }
            })
        );
        await this.batch(...createActions);
      } catch (error) {
        Promise.reject<IDataBaseError>({
          ...dataBaseError.ERROR_ON_INSERT_MANY,
          error,
        });
      }
    });
  }

  mergeRecords<T extends Model>(
    rightTableRecords: T[],
    leftRecord: RawRecord,
    params: IJoinQueryParam
  ) {
    const { leftTable, rightTable } = params;

    const rightRecord = rightTableRecords.find(
      (r) =>
        r._raw[rightTable.key as keyof RawRecord] === leftRecord[leftTable.key as keyof RawRecord]
    );

    if (rightRecord) {
      const objectResult = {
        ...rightRecord._raw,
        ...leftRecord,
      };
      return objectResult;
    }

    return null;
  }

  async getAllManualJoin<T extends Model>(
    params: IJoinQueryParam,
    mapper?: Function
  ): Promise<T[] | void> {
    try {
      const { leftTable, rightTable } = params;

      const records = await this.database.collections.get(leftTable.name).query().fetch();
      const leftTableRecords = records.map((item) => ({ ...item._raw }));
      const keysLeftTable = leftTableRecords.map(
        (item) => item[leftTable.key as Partial<keyof typeof item>]
      ) as string[];
      const rightTableRecords = await this.database.collections
        .get(rightTable.name)
        .query(Q.where(rightTable.key, Q.oneOf(keysLeftTable)))
        .fetch();

      const joinedRecords = leftTableRecords.map((leftRecord) => {
        const objectResult = this.mergeRecords(rightTableRecords, leftRecord, params);
        return mapper ? mapper(objectResult) : objectResult;
      });

      return joinedRecords;
    } catch (error) {
      Promise.reject<IDataBaseError>({
        ...dataBaseError.ERROR_ON_FIND,
        error,
      });
    }
  }

  async delete(id: string) {
    await this.database.action(async () => {
      try {
        const record = await this.collection.find(id);
        if (record) {
          await record.destroyPermanently();
        }
      } catch (error) {
        Promise.reject<IDataBaseError>({
          ...dataBaseError.ERROR_ON_DELETE_ONE,
          error,
        });
      }
    });
  }

  async updated(id: string, callback: (record: Model) => void) {
    await this.database.action(async () => {
      try {
        const record = await this.collection.find(id);
        if (record) {
          await record.update(callback);
        }
      } catch (error) {
        Promise.reject<IDataBaseError>({
          ...dataBaseError.ERROR_ON_UPDATED,
          error,
        });
      }
    });
  }
}

export default ModelBase;
