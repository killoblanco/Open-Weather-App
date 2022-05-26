const codes = {
  day: {
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fclear-cloudy.png?alt=media&token=a2710391-7115-4457-a152-6265403bdeab': [1003],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fdrizzle.png?alt=media&token=ddcaddcb-1eec-4e98-96f5-53300ec372c5': [1150, 1153, 1168, 1171, 1183, 1186, 1189, 1195],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fdrizzle-sunny.png?alt=media&token=c1f9bd64-0218-4e23-aa32-d94cfe4415fc': [1063, 1072, 1180, 1192, 1240],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Ffog.png?alt=media&token=c3bc5c2b-c395-47d4-ae5c-082e66f0f442': [1030, 1135, 1147],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fhail.png?alt=media&token=f4873323-a2a7-4577-bf08-fb04bfa252d3': [1237, 1261],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fpartly-cloudy.png?alt=media&token=73a24188-fdd7-4515-8958-da1bd79f2704': [1006, 1009],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fsleet.png?alt=media&token=9d4acc63-c0e4-4f73-9454-6f1a0fd64e43': [1069, 1198, 1201, 1204, 1207, 1249, 1252, 1255],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fsnow.png?alt=media&token=cb9ccdd0-ea49-438f-9705-e4e70836c7d4': [1219, 1222, 1225, 1258, 1264],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fsnow-flurries.png?alt=media&token=d7789ad2-9f04-4a67-9966-3b80a525f3d3': [1066, 1210, 1213, 1216, 322],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fsunny.png?alt=media&token=c791072c-d512-40a1-b31c-177831964699': [1000],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fthunderstroms-2.png?alt=media&token=c85f9827-4422-440b-8a7c-1bec858a9561': [1246, 1276, 1282],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fthunderstroms-sunny.png?alt=media&token=6071af0c-07d5-4a14-b607-5e182cba0a96': [1087, 1243, 1273, 1279],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fwindy.png?alt=media&token=b9df7e61-bd14-45ad-be55-e0a98b3f5ff3': [1114, 1117],
  },
  night: {
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fclear-cloudy-night.png?alt=media&token=e49030bc-f73b-4e39-9196-60a73daa0491': [1003],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fdrizzle.png?alt=media&token=ddcaddcb-1eec-4e98-96f5-53300ec372c5': [1150, 1153, 1168, 1171, 1183, 1186, 1189, 1195],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fdrizzle-night.png?alt=media&token=0df63be4-48a4-41a8-a853-7cd57eecbb07': [1063, 1072, 1180, 1192, 1240],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Ffog.png?alt=media&token=c3bc5c2b-c395-47d4-ae5c-082e66f0f442': [1030, 1135, 1147],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fhail.png?alt=media&token=f4873323-a2a7-4577-bf08-fb04bfa252d3': [1237, 1261],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fcloudy.png?alt=media&token=64563570-7a9c-44a7-800f-cf2d516abbfd': [1006, 1009],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fsleet.png?alt=media&token=9d4acc63-c0e4-4f73-9454-6f1a0fd64e43': [1069, 1198, 1201, 1204, 1207, 1249, 1252, 1255],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fsnow.png?alt=media&token=cb9ccdd0-ea49-438f-9705-e4e70836c7d4': [1219, 1222, 1225, 1258, 1264],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fsnow-flurries.png?alt=media&token=d7789ad2-9f04-4a67-9966-3b80a525f3d3': [1066, 1210, 1213, 1216, 322],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fnight.png?alt=media&token=56331c8d-3ea2-4354-9c2a-c4cc383b3fd7': [1000],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fthunderstroms-2.png?alt=media&token=c85f9827-4422-440b-8a7c-1bec858a9561': [1246, 1276, 1282],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fthunderstroms-sunny-night.png?alt=media&token=3392a650-8760-40a1-b776-65c8ba272a28': [1087, 1243, 1273, 1279],
    'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fwindy.png?alt=media&token=b9df7e61-bd14-45ad-be55-e0a98b3f5ff3': [1114, 1117],
  },
};

const getIconPath = (code: number, isDay: boolean) => {
  let icon = 'https://firebasestorage.googleapis.com/v0/b/killoblanco-119f3.appspot.com/o/weather%2Fsunny.png?alt=media&token=c791072c-d512-40a1-b31c-177831964699';

  Object.entries(codes[isDay ? 'day' : 'night'])
    .forEach(([key, value]) => {
      if (value.includes(code)) icon = key;
    });

  return icon;
};

export default getIconPath;
