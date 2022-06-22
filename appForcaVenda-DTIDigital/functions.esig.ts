// import Model from '@nozbe/watermelondb/Model';
// import { Q } from '@nozbe/watermelondb';
// import { synchronize, SyncPullResult } from '@nozbe/watermelondb/sync';

// import database from './src/model/index.esig';

// interface IPost extends Model {
//   title?: string;
//   subtitle?: string;
//   body?: string;
//   is_pinned?: boolean;
//   created_at?: Date;
//   updated_at?: Date;
// }

// interface IRPost {
//   id: string;
//   title?: string;
//   subtitle?: string;
//   body?: string;
//   is_pinned?: boolean;
//   created_at?: Date;
//   updated_at?: Date;
// }

// interface IChangesObj {
//   [x: string]: {
//     created: IRPost[];
//     updated: IRPost[];
//     deleted: string[];
//   };
// }

// export const getAll = async (): Promise<IRPost[]> => {
//   const postsCollection = database.get('posts');

//   const allPosts = await postsCollection.query().fetch();

//   const readyPosts: IRPost[] = allPosts.map(
//     ({ title, subtitle, id, body, is_pinned, created_at, updated_at }: IPost): IRPost => ({
//       id,
//       title,
//       subtitle,
//       body,
//       is_pinned,
//       created_at,
//       updated_at,
//     })
//   );

//   return readyPosts;
// };

// export const deteleAll = async (): Promise<void> => {
//   const postsCollection = database.get('posts');

//   await database.action(async () => {
//     const postCollection = await postsCollection.query().fetch();

//     const promises = postCollection.map((postItem: IPost) => postItem.markAsDeleted());

//     await Promise.all(promises);
//   });
// };

// export const createData = async (): Promise<void> => {
//   const postsCollection = database.get('posts');
//   await database.action(async () => {
//     await postsCollection.create((post: IPost) => {
//       post.title = 'New post';
//       post.subtitle = 'New post';
//       post.body = 'Lorem ipsum...';
//       post.is_pinned = true;
//       post.created_at = new Date();
//       post.updated_at = new Date();
//     });
//   });
// };

// const pullChangesFromAPI = async (): Promise<SyncPullResult> => ({
//   changes: {
//     posts: {
//       created: [
//         {
//           id: 'wj1chmyyc6xc4ejt',
//           title: 'bar',
//           subtitle: 'bar',
//           body: 'bar',
//           is_pinned: true,
//           created_at: '1620392859628',
//           updated_at: '1620392859628',
//         },
//         {
//           id: 'aaaa',
//           title: 'foo',
//           subtitle: 'foo',
//           body: 'foo',
//           is_pinned: true,
//           created_at: '1620392859628',
//           updated_at: '1620392859628',
//         },
//       ],
//       updated: [],
//       deleted: ['aaaa'],
//     },
//   },
//   timestamp: new Date().getTime(),
// });

// export const syncDatabase = async () => {
//   await synchronize({
//     database,
//     pullChanges: async () => {
//       const { changes, timestamp } = await pullChangesFromAPI();

//       return { changes, timestamp };
//     },
//     pushChanges: async ({ changes, lastPulledAt }) => {
//       console.log(
//         '🚀 ~ file: functions.ts ~ line 100 ~ pushChanges: ~ {changes, lastPulledAt}',
//         JSON.stringify({ changes, lastPulledAt })
//       );
//     },
//   });
// };

// const mapPostModelToObject = ({
//   id,
//   title,
//   subtitle,
//   body,
//   is_pinned,
//   created_at,
//   updated_at,
// }: IPost): IRPost => ({
//   id,
//   title,
//   subtitle,
//   body,
//   is_pinned,
//   created_at,
//   updated_at,
// });

// const getChangesByTable = async (tableName: string, lastSync: number): Promise<IChangesObj> => {
//   const generalCollection = database.get(tableName);

//   const createdData = await generalCollection.query(Q.where('created_at', Q.gt(lastSync))).fetch();

//   const readyCreateData: IRPost[] = createdData.map(mapPostModelToObject);

//   const createdIds = readyCreateData.map(({ id }: IRPost) => id);

//   const updatedData = await generalCollection
//     .query(Q.where('updated_at', Q.gt(lastSync)), Q.where('id', Q.notIn(createdIds)))
//     .fetch();

//   const readyUpdatedData: IRPost[] = updatedData.map(mapPostModelToObject);

//   const deletedIds = await database.adapter.getDeletedRecords(tableName);

//   return {
//     [tableName]: {
//       created: readyCreateData,
//       updated: readyUpdatedData,
//       deleted: deletedIds,
//     },
//   };
// };

// export const pushChanges = async (lastSync: number): Promise<void> => {
//   const tableNames = ['posts'];

//   const promises = tableNames.map((table) => getChangesByTable(table, lastSync));

//   const changes = await Promise.all(promises);
//   console.log(
//     '🚀 ~ file: functions.ts ~ line 161 ~ pushChanges ~ changes',
//     JSON.stringify(changes)
//   );
// };

// // const createSync = async (): Promise<void> => {};

// // const updateSync = async (): Promise<void> => {};

// // const deleteSync = async (): Promise<void> => {};

// // const pullChanges = async (): Promise<void> => {};
