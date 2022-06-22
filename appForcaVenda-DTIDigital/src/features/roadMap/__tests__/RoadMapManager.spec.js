import VisitModel from '../../../shared/models/Visit/VisitModel';
import RoadMapRepository from '../services/RoadMapRepository';
import { RoadMapManager } from '../services/RoadMapManager';
import { getPendingVisits } from '../RoadMapUtils';

jest.mock('../RoadMapUtils', () => ({ getPendingVisits: jest.fn() }));

jest.mock('../../../shared/models/Visit/VisitModel', () => {
  return class MockVisitModel {
    constructor() {}
  };
});

jest.mock('../services/RoadMapRepository', () => {
  return class MockRepo {
    constructor() {}
    getCostumerVisits = jest.fn();
  };
});

jest.mock('../../../shared/base/api/BaseManager', () => {
  return class MockBaseManager {
    constructor() {}
    handleError = jest.fn();
  };
});

describe('Roteiro de visitas', () => {
  let mockRepo;
  let manager;
  const MOCK_ID = '1234';

  beforeAll(() => {
    visitModel = new VisitModel();
    mockRepo = new RoadMapRepository();
    manager = new RoadMapManager();
    manager.repo = mockRepo;
    manager.repo.visitModel = visitModel;
  });

  beforeEach(() => {
    manager.repo.visitModel.updated = jest.fn();
    manager.repo.visitModel.delete = jest.fn();
  });

  it('should be return as scheduled visits', async () => {
    const visitsFilterMock = [
      {
        id: '12398',
      },
    ];

    manager.repo.getCostumerVisits = jest.fn().mockResolvedValueOnce(visitsFilterMock);
    await manager.getRoadMap();
    expect(manager.repo.getCostumerVisits).toBeCalledTimes(1);
    expect(getPendingVisits).toBeCalledTimes(1);
    expect(getPendingVisits.mock.calls[0][0]).toEqual(visitsFilterMock);
  });

  it('should return an error when visits do not load', async () => {
    manager.repo.getCostumerVisits = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    await manager.getRoadMap();
    expect(manager.handleError).toBeCalled();
  });

  it('should be delete a visit', async () => {
    const idExcluded = MOCK_ID;
    await manager.excludeVisit(idExcluded);
    expect(manager.repo.visitModel.delete).toBeCalled();
    expect(manager.repo.visitModel.delete.mock.calls[0][0]).toEqual(idExcluded);
  });

  it('should return an error when when can not delete a visit', async () => {
    const idExcluded = MOCK_ID;
    manager.repo.visitModel = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    await manager.excludeVisit(idExcluded);
    expect(manager.handleError).toBeCalled();
  });

  it('should be edit a visit', async () => {
    await manager.visitEdit(MOCK_ID);
    expect(manager.repo.visitModel.updated).toBeCalled();
  });

  it('should return an error when when can not edit a visit', async () => {
    manager.repo.visitModel = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    await manager.visitEdit();
    expect(manager.handleError).toBeCalled();
  });

  it('should be completed a visit', async () => {
    await manager.visitComplete(MOCK_ID);
    expect(manager.repo.visitModel.updated).toBeCalled();
  });

  it('should return an error when when can not completed a visit', async () => {
    manager.repo.visitModel = jest.fn().mockImplementationOnce(() => {
      throw new Error();
    });
    await manager.visitComplete();
    expect(manager.handleError).toBeCalled();
  });
});
