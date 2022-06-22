import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import { decode } from 'base-64';
import FileViewer from 'react-native-file-viewer';

const getPath = () => `${RNFS.DocumentDirectoryPath}/fv_martins`;

export const createFolder = async () => {
  const path = getPath();
  await RNFS.mkdir(`${path}`, {});
  return true;
};

export const writeFile = async (fileName = 'BEM_martins_sheet.xlsx', fileContent: string) => {
  const path = getPath();
  const pathFile = `${path}/${fileName}`;
  const content = decode(fileContent);

  return RNFS.writeFile(pathFile, content, 'ascii');
};

export const shareFile = async (fileName = 'BEM_martins_sheet.xlsx') => {
  const path = getPath();
  const pathFile = `${path}/${fileName}`;

  return Share.open({
    url: `file://${pathFile}`,
    type: 'application/vnd.ms-excel',
    showAppsToView: true,
  });
};

export const openFile = async (fileName = 'BEM_martins_sheet.xlsx') => {
  const path = getPath();
  const pathFile = `${path}/${fileName}`;

  return FileViewer.open(pathFile, { showAppsSuggestions: true });
};
