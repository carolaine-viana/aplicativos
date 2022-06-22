// import React from 'react';
// import { Text, useColorScheme, View, TouchableOpacity } from 'react-native';

// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { Model } from '@nozbe/watermelondb';

// import {
//   getAll,
//   deteleAll,
//   createData,
//   // syncDatabase,
//   pushChanges,
// } from '../../../../functions.esig';

// interface IPost extends Model {
//   title?: string;
//   subtitle?: string;
//   body?: string;
//   is_pinned?: boolean;
//   updated_at?: Date;
// }

// interface IRPost {
//   id?: string;
//   title?: string;
//   subtitle?: string;
//   body?: string;
//   is_pinned?: boolean;
//   updated_at?: Date;
// }

// const WaterMelonDemo = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   const [posts, setPosts] = React.useState<IRPost[]>([]);

//   const buscar = async () => {
//     const readyPosts = await getAll();

//     setPosts(readyPosts);
//   };

//   const salvar = async () => {
//     await createData();

//     await buscar();
//   };

//   const deletar = async () => {
//     await deteleAll();

//     await buscar();
//   };

//   // const sync = async () => {
//   //   await syncDatabase();

//   //   await buscar();
//   // };

//   return (
//     <View>
//       <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity
//           onPress={salvar}
//           style={{
//             width: 50,
//             height: 50,
//             backgroundColor: 'red',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ color: 'white' }}>Criar</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={deletar}
//           style={{
//             width: 50,
//             height: 50,
//             backgroundColor: 'blue',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ color: 'white' }}>Limpar</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => pushChanges(new Date('01/01/2020').getTime())}
//           style={{
//             width: 50,
//             height: 50,
//             backgroundColor: 'green',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <Text style={{ color: 'white', textAlign: 'center' }}>Push Changes</Text>
//         </TouchableOpacity>
//       </View>
//       <View>
//         <Text>{JSON.stringify(posts)}</Text>
//       </View>
//     </View>
//   );
// };

// export default WaterMelonDemo;
