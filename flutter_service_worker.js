'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "683131c254ae575db789c779932387a2",
"/": "683131c254ae575db789c779932387a2",
"main.dart.js": "6ae43a8478af2f932fcb8346b9082aa9",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "a163a9457fdeba8ac29a27cbf5e35fd9",
"icons/Icon-192.png": "629d84e69745ac66a491b74d1cfb9c41",
"icons/Icon-maskable-192.png": "629d84e69745ac66a491b74d1cfb9c41",
"icons/Icon-maskable-512.png": "41a568e52c19f9b29a87cbcedfa9ae6b",
"icons/Icon-512.png": "41a568e52c19f9b29a87cbcedfa9ae6b",
"manifest.json": "0df6c98d30658aba836ceaf8baf218f2",
".git/config": "22588af390399f434e725e32ddbc3502",
".git/objects/0d/56adf60752ae192e88fb05154c4656530f519e": "02d2a2644a07ed688d72243ca0435c1d",
".git/objects/59/991aa8df18b03cd65cf5beaa97ae4e855a33c1": "c25b24b6eea1f0fd46c8efb49c016e08",
".git/objects/59/aeac0890d886bdfd3c746aa08f2f6039365cb7": "6fbe1eb431e3d1e6c6a966f6214271f4",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/66/15c91a6ba4329912cc20f6592a4a66c3a3bb11": "5b6162068b13037a8749569719017d34",
".git/objects/50/a4740a491c2bdab57eb7e97a56abf2a8afe528": "c1086862eac0789110c2bfe3fe6c32aa",
".git/objects/68/0cd25c48f3cfee2430dfbd08c6feb03566f4a7": "5e8088d33e47046d207a5f4adf570c30",
".git/objects/57/da79d12dded20d7fb35da714ac6f9d60159a2c": "68b0049c199a461ba3c09bfd8b62615e",
".git/objects/3b/98b190e2931435931bcda071385d360eb554d5": "74c153e2a7d03a2e88235adcc3b7fb68",
".git/objects/9e/1610e715153933bdfef879b67d1f6b1fa2bced": "4fc707ba676ab6f9fa6b66c5d2703f0f",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/e24c016cb6449b50a9af01f7b8d3f016a76fe5": "09255b39f95324033c47c050e33a4dc1",
".git/objects/32/77914143254d1a14ad6ea504029516658b4cc7": "1ba2f636828def113216bfa7a9a947a5",
".git/objects/51/3b733d455a93010c3deb0eb5834fb861edc8fc": "7c18645bd93adc6d41ea05e829edbafd",
".git/objects/3d/f54952de53ce99e7337bf4ce0660123de745ce": "612781489c03d041eb5ccaca8ff01abc",
".git/objects/3d/db1f655d2a0a459f95b63fdc5f54a55f23d943": "75f09ea983fbfefd5d1d9a5c0e3182a0",
".git/objects/93/49c81dcf323dbd3be8977d26a2dab0774f6ac8": "1c476b7fccb13c9e61e640963dbf4c33",
".git/objects/5f/40c734514c0097aa4c26d416ed3b1978830487": "e8f7ffcc561bea58d1ec7327d109f04a",
".git/objects/5f/4d2c7f1a72832bcccb6c2ac6dfe2817cfac480": "17663d863c0c25dd46ff25d4cb9db781",
".git/objects/05/08996aac5e4652ebac4688901ad6a9dd0ae80b": "35fbc5cafe5a65ebc2eb9880fc4d4e1e",
".git/objects/05/f2068d34d6a4b19c15028bb475d4831a5f622e": "52cbcadae3564ce8146c81f687c511cb",
".git/objects/02/60640088c966f7a6a71667e7cbe183e8369a12": "6db5c2825c3c96a249b60d8c13a2f324",
".git/objects/02/f238c6509c308327e369a1491d8caaf17c498e": "fb5abaeb6e4919a12435ad019161361c",
".git/objects/a4/5833e0f6e14388a49851df7b9b7ad0744a892e": "724bdbcf713474ba3c4fc39e06895f36",
".git/objects/a3/d36eb853a433f659720d39b3db28702c6a538f": "332fde80966a26f3848b18fc0e6ef36c",
".git/objects/b5/164b679e47f78ebbaa0da9c2a46919b79bc3eb": "75a6a7fcf8cd2529d5651016d457084d",
".git/objects/b5/aa2d4049ba43ac24bc23f3284777f9c7f570be": "a9fe6aba48486452f3cf17a089c09dbc",
".git/objects/b2/65b8dbf6ff3ff62cd5ce595a66d3f3e18e30ba": "d5c89fba242b3dcf50fdac96d56fe4d2",
".git/objects/ac/ef29d4ebf81c3cb708af1f0a6755a40c185b05": "5a6781379a003f4248bbc904a3cd280b",
".git/objects/d0/2d066cb3b09eb99da49ca2dbebfaeeef84bb13": "a4ae63e8bf59d23e78ba89cfb2695302",
".git/objects/b3/8e3c37a067df82fedd7b11c3d5eccb8474317d": "ab6cbc44ce46aa1cf9aeafaaab612c8d",
".git/objects/a5/68b706c6333dcca658e62c27580fbd494ed5b9": "addc15570d681af0edbbffa66883f631",
".git/objects/d1/d5aa8e28d987fb18cae82b2f039326bf9a1beb": "fa70d58322f4416c5178255ef3285f9b",
".git/objects/d6/0c86f7d39f6ef554a6e63e70d268ae8f6fcfc6": "f18627134cf2eabfa24774598bd034a8",
".git/objects/bc/a14acb60cf8130d7835ce03dd45408e9ebcf96": "18e5754fd5508b56c4bb7e0df8e06c92",
".git/objects/ae/144b6aa458f6dada7d3d4a7403e7b3024a857d": "eebd3ce34ffca9882715398e85533c96",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/c0/9a70582fc6196c351372cda850f453b81efe3d": "3f483df69aa7e4a2481cb2a2d79f8e27",
".git/objects/c0/99a5d884d32e63d57c80964ea2b0bba5cb9eaa": "d3fc2c97f6b68b0813c48d77968f0b70",
".git/objects/c0/1c1450ba5b72d73a7d451ec83248e90cbe4491": "837d13ce106831c90aeed5af0ea85212",
".git/objects/c9/e944d93757927a5cf7d80f654ded89627deabe": "1d88d29e65a1bff7ee5905f632c77368",
".git/objects/fc/71f647c54dd8255717a4e2b24794ae9ec22128": "ef7fda65aa9d5f291484b4e5e2f63e86",
".git/objects/e3/a4218200c905b8fcd6c07481417c7097bd2de1": "662ccf904176e0b4727453a343a43e1d",
".git/objects/fe/3552aaded814897738a5e9de7a6af4b49b5702": "0874dc53916775d8d2190d474270c953",
".git/objects/fb/89064cc997f72fd79443cf75db878297273989": "c1556f17471c1bd4334a94e67e8c2cc8",
".git/objects/ec/912633e9df1f91c5a652a4413bba99451ae8d6": "370e560ba94a263328b3748b345bed92",
".git/objects/20/adb28eac5c4d6fac3ef9796f59e398b327aee4": "7ae8b6efe87c35ce01c884d927a0c2ca",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/11/12b698af21ad47a7b2d8e89fbf6410e48c6269": "eb46780847fe7668fee1714bc203c177",
".git/objects/16/d82aa92a8042e6e9c737001656d16e13b6ab9e": "bdc06ddae8d2405292f6989ff46777c2",
".git/objects/45/f6380278447d5462bc217ec64da9d4dfb0bbab": "5f9638f94b13537d36514519b844c752",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/87/d5a94b5bbaadbfb78057b6085886fcf623796a": "f6031bc27e0a89dcefc7b58248903720",
".git/objects/1a/e14d541cbc1916b3ab9e4b99fc76b0ede51772": "ed2445a8d3b11fba91ea95fe8122339f",
".git/objects/28/9ae5f23ef54d44c57f53a9a81db54a1beb83ac": "d34a889cf9cf8d712ea52c4f8d0440f3",
".git/objects/7b/16b7491cf90699bd14e85e2992dcbf0a3c3f5c": "e707489d6a0cd9c854bc3b33a007f718",
".git/objects/7b/eace4baac6f805c489916fde032483800ab6c9": "d3119d68235ad8efd65ed6cddd027c06",
".git/objects/10/c4e8bf3dd84116b2473761c9bf9a90b8b9348e": "0ff29311a8f82d739a16ffe13b0ef509",
".git/objects/4c/39b5d5ea58c985aa3971c13d524d950480926e": "fde3487526e4fb03a2ce00397e110aef",
".git/objects/4c/08e6a570637ab0e86e5c35a6bb677af30888f6": "9fe4c0acc4191def07741a47d60f0a2c",
".git/objects/26/a1e9e23ff91b8eb48865aab5ee43756ab349e3": "0d4a34e2ec8cf2d262cc9637d315dc4a",
".git/objects/21/ca80a25d8f2b2620f134d4e13ceb6af217049e": "4e2c5c07b9a9d0582241d444cb5359a6",
".git/objects/4d/3cccc3cf21105ca2ee4d0d4bd0965ac7a6667f": "c02711bb4656d5527f4d4dab36f0d993",
".git/objects/81/8667dd37217f155908731d641aa5f5ff8af51b": "cafb4b8745b0f6b82d69c8c9622cc8ff",
".git/objects/2f/e7ff14972fcfecb548a55eb4bee7ee37a6dfa4": "8c55f8fe98cca027d4ebc60385708c9d",
".git/objects/43/61be4df6776f3c1bfaffa90802d6d6e73be2b4": "7eacf811705df05f917362f782a95856",
".git/objects/43/20d59923b83bbd10e14945a928e236ad2c0f18": "0b12d3e5b09588945ab15770ca167d63",
".git/objects/9f/862e3c6bbbc668156997787f501ee1dbe353ac": "7702eb089a3dbc7abb106cf00a876d85",
".git/objects/9f/148627c5e3b856258811cef134e546cd77beb0": "55a2974c276bbaf80d519c31b761c6cf",
".git/objects/6e/d63ff1a6ee662065cd5866cee6be1cf54410cb": "e65411c7c8b15024c9c02b2730989bc4",
".git/objects/9a/08c3ef521fe8dccf222993ffbf372e5332c370": "7e5b854d6a69554b2ebee5eac2262baa",
".git/objects/36/d2cd17c3815544ac6196369f4b3ddb982bdb9e": "c2931df294917517d95ffc962b057d95",
".git/objects/5c/5f805fa57241dc0b0bc205a9ba517cdfe88682": "6d70a51a062e6dc9ccf9076327a26e27",
".git/objects/09/e0e7369d8c60923a53c8097674dde7f71a0cc0": "f72039436c94a04eb480f8a0c22c5f8c",
".git/objects/5d/bb86ad13b4bdfae2a544b18abe88562da6ece5": "f9577b8204fd98e492cace5654249393",
".git/objects/5d/3a1e5395b6f96eaf9cfc6b8f552dfadbfb254a": "15324ba4ccd097dd0ce0b61a34672b1d",
".git/objects/31/e3dbab20c597aa923f224ca15a7a678bfbf96e": "55f13ad58c86cec90731f317610a85b3",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/30/e2392a2a7da30434bd2f6b047c80a8a6af0b2b": "4d4d7ac08fac29b96bc2d8307ec32dae",
".git/objects/5e/8648f53054a8ee26cd03264b9a3ef39e5800eb": "854189bc42cfd1e8617566709c605c0e",
".git/objects/5e/c4f0d74b5bc0d251455ca6be7675d28eacde14": "f57ab81e700e0193863b0d812984f6a4",
".git/objects/5e/a40e9354e92d67dae1ff47d1bf3c1b49c7fa5c": "1ce6c2d94b06a7e80e70597f8d69cb6f",
".git/objects/5b/8e83eb4771c61fc6e0e2e273aab95b0a1993c4": "5b0daf7fba23b071f63a46fdab40bf49",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/6c/d4a80421de46c94cdcf88aedcdad468a5ea505": "fcd802249f7c9b14d81602e25b18eb18",
".git/objects/39/3a3ed1624392af703b64565de97becf838799b": "eef3647ea8114e9ed3666876a6842950",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/bdd6090500394bec0fb1f585945a1ef7d19421": "633f756b1580f96c8871413f8ebdc843",
".git/objects/97/2dc7c3a25a7afba763ebe78575b12d76007969": "edf33475d59337dce15e26f56f1749af",
".git/objects/97/9b205ddaf943a2222176b75e99f211df2fe4b5": "99506fd7f83b7c7b355212dade3a0c84",
".git/objects/63/f1a5bd9f36386f3b052e65e9201e790db24333": "d8e11931a83669adee95ddc43d708775",
".git/objects/63/479bce6a770736887ce90e9f558b5c46ebafe9": "aba869eb20f604c9a64bbf2a21b544f9",
".git/objects/0f/c066ab604cd2d2da50242787437cd050bda454": "9188b7787ae4665e3d91a2dea7f31fbe",
".git/objects/0f/3afaab827b306060a89050269b7601b90bde05": "f81fc44f1f38ccfb4e68476f086c9c33",
".git/objects/64/72b7071ce96355158186f45fbe5fbbc15e1a1b": "455f906764a364b8734290b2beed3ee1",
".git/objects/64/279bddbeb75206ac8fe0bc795d21020b0322be": "61d013b51e798ae5b46c41ebaeed088f",
".git/objects/90/4a77b654c368b1c019ffccf591ab2171a2754c": "96f3ddbb7bc523cb328c0880bd50ded1",
".git/objects/bf/46133233d9950548bdbd8e31e359b2755071d6": "e87984e75f414a78fe35d24ca5d3f0c7",
".git/objects/a7/1a4eebe86bfbb81fcb9a1276c1c6a42c52d790": "153bed9c4eee7258d1c16d28c8c2da1c",
".git/objects/b1/fd9c3101863555a173f0d20b10370c230b88d0": "24306a819111b22028736c99968ba9cf",
".git/objects/b1/a2ef7dfdd49de07d476f5a9ae547ba05e9286f": "5ead4e4b435953ab9f5b1e08b3dc8ca7",
".git/objects/dc/f4e7f12571f7975fc7dd7d7375bb38991b13a3": "63ca3c39bef481d094863c3177ab467b",
".git/objects/b6/88834d07d9305db693ab62407cbb2c6fb7332f": "9efab4142908b6d0a6de8cb8e281a6f6",
".git/objects/a9/5d2d9411515e588f0f426308d36cf00ebe4859": "dea176db697c3aa563d0ab7680fd0ea0",
".git/objects/aa/da89c77f74bf43acf51bcd2d1f98176f4a6615": "6e7105d012c0bbd3706bb74edcf9bfe6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/2f54393b1b58ae9840a0ba22f8c0ab28add6cd": "389502dea532be6f2db4328cafa84e10",
".git/objects/af/87f6cdfbc87591b5635a96a85a065036251b40": "322607fe1c62a0f91684e792d2af95e2",
".git/objects/db/07cefdc54c7b8c92a1d69b30016520c3e9ca46": "50dd6e4efb9e3be73fc3e440f43099ce",
".git/objects/db/f6d5ab766ed347bdf4a78e19ba7c1eceddfc3e": "0937071e8e0be925e6dbcb726a6e4fe2",
".git/objects/a8/bc8fdd2e215e1d02da52effab4e39db69c3889": "3efb41b627fe8cf9811cce8cebf1a9fa",
".git/objects/a8/2cc420b0f5f06cd42ebab5d42fc1ab9af129bf": "29b2d7e9cb7d32d83b991f69ab79cdd9",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/2e37fb793fb0f78df20f77a178f79107225178": "e633bbc0fab953e6d9ad8814a5d764fb",
".git/objects/c4/7a7c9e06ef9db035a267c17f66a23eaea7a4dc": "3c68d7bf70010ebabd21fdaea4083733",
".git/objects/cd/44575889c8cc10e71d66b028fd35d55f723972": "486cb5c9fc55608b7ae305c428108652",
".git/objects/f0/35c574c057a93aa9f5164ade902ac4de5cbf1d": "1e702da8b407c45ae6a73d8bc4f98e3c",
".git/objects/f7/83d443c9ae5b6cb1d0efdb639458a6dd9f6401": "a1a77bd2615a633168a0caf563c1866b",
".git/objects/fa/f9ddd6632da1fe087a7dc9fee9c0e18eaf8a78": "4c5ca86b007fcf24091aef08a258a082",
".git/objects/c5/d8a20ed2976817e5e9ace115b823228fb9deb1": "4399abdce4f3f62359974735abc29183",
".git/objects/c5/a7a32f48bad07ead034dcf38d8a4340e665af4": "50370ee9772445f1e51f3e6b4be72666",
".git/objects/f6/e482f784ccbc4791fc6e47199c346d57852fdf": "d40e3aac4d4c048eb7d804d436143b89",
".git/objects/f6/0cb724b6172930150c94fc6862acac3bf71b5e": "459ef2f02eb942b23289057181e807fb",
".git/objects/f1/f88c41fb0df6257e01239558144bc69e8e0611": "88e7215fc633179fcf8097cc6ad7dfcd",
".git/objects/f1/300610c5ae3246ff7a0ed16bf6a6b4b59cecf1": "f70f22ee8790cd81829a3d84950497bc",
".git/objects/f1/2b2e54d33debe1ec84735ccf41e8853c00371a": "6a2a5a8759787876f0c7dfd787ed4df6",
".git/objects/cb/7aa1fd1dc97d8a747f6a396c0be12e0b994cc5": "2c89738270aa1cf00901b9fad7472971",
".git/objects/e0/f10f9424953a94d246bfe87d3dcc97b2094f6a": "9fac52cfcbb0c7d75dc6655e03440398",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/054fc5f9395e5d7e80633da449c641a539ef60": "a760ed82f038b13fc4ae76c07f5d293f",
".git/objects/2c/bcb513db7278632fa13d3556724475a4938c44": "7ab31ecaa2589082297a1d4ff50e7fec",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/ac9029a242090020a546985d855a3f883ec887": "70c846041dc34a353e4f1cb17dc457b2",
".git/objects/1b/81f98e973fa04e94b25d4508a878067b1bd371": "0454ff37404629aed763fa549d8b79cc",
".git/objects/48/7c5a83af37b9b93507a08a761c0788c764b169": "442e6281a872db016cbc3b844273ada0",
".git/objects/84/ff95097df927fb86d106797ef2127227347985": "b1b46c36e7a4b795775786605d917fcf",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/827a3b90e28d213fe9a48ff4803628081400e9": "16d9721b3c0ddb97dd220f8b449bd587",
".git/objects/1d/1f814381c450b85d396ff714723fb6f0a5970a": "194f5f0f4ab8588f79d36edb890e3958",
".git/objects/71/14294aafcc6d3d2d1f714afa3059795971793f": "3a95166125e4bdb8aadac1e051dcac32",
".git/objects/76/c683ecd6740ae7cfcef254763e50a76feafb84": "77eb9589766be538449a82124aaecf33",
".git/objects/1c/927a4f2f4ed48d50493ff0dd74f1cfdb6e44df": "4d4add3f0f2fd43f9a35096dc7329507",
".git/objects/1c/f9d09d2ff2ae001ade9543c44bd93adb0b1ff2": "559a07abd8c13929910920adf375db71",
".git/objects/40/598743042f0a893a741fdd572a9ab106318638": "cec3ad4c39528ba9ae6052c31ac4b316",
".git/objects/47/6b77f1624c0b4bbbe99dc795aa0c0c14ffd1e0": "69fa24bedb1431ea9c4fa0be7ba2cb84",
".git/objects/78/de5ac53221946e6390095e5e3af63be1a220ce": "43181051f06762c12a6ba7b50c832ee4",
".git/objects/8b/69d0c028c14f5052aade46423527806d20d279": "ae736ff21e28a29c9ccf28b1d700da69",
".git/objects/14/6daf4e00dcb942765804d90f99d657fa30b3d4": "4acb25cd7d4ed08bd17a77a2607f5613",
".git/objects/8e/2e07ff655328cd4dec959f05d5bf3ae56856ac": "490d7133743566c8a320e27805d37677",
".git/objects/22/be5163342621073f7dcaec1a3a3d49c7c5fd91": "3c4666134d6287348ed5c0cc445ab70b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b6d31530b9acd9200cc8b30a24cef82b",
".git/logs/refs/heads/main": "b6d31530b9acd9200cc8b30a24cef82b",
".git/logs/refs/remotes/origin/HEAD": "e734b7f229ecaed762a2446bdff01025",
".git/logs/refs/remotes/origin/main": "944b57f94b9ed0dab18c914e7b166629",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2abafe665ce81934131a22081fc5fee8",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "2abafe665ce81934131a22081fc5fee8",
".git/index": "9eef1d92c048f09df85a80d24ddfc54f",
".git/COMMIT_EDITMSG": "efc43da4578862a6cdc7ad948907957d",
".git/FETCH_HEAD": "a130cef2294e1a597b12474fee07a5dc",
"assets/AssetManifest.json": "702563d02aaab0a97a7b4b5fc5900977",
"assets/NOTICES": "b565d6d5110e08eb02c272a2510a012e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/Resume_Edmond_Wong.pdf": "694453a04f750e7f3b1c3fa242d93af5",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/favicon.ico": "c4b1f1e9b0fa1a38f358b167bee127b9",
"assets/assets/images/chromeOS.jpg": "337a5655b34941b76881867358dc6057",
"assets/assets/images/projects/trip_planning_application_4.png": "580a6893ac6af087cd9a885a92ed6ad7",
"assets/assets/images/projects/gaming_platform_integration.png": "07084ac93e9cb58c944f1a855ea28a17",
"assets/assets/images/projects/trip_planning_application_3.png": "aa6680c7dd3f398f5f7f2ad17d1f78b5",
"assets/assets/images/projects/trip_planning_application_2.png": "7b1589661b149ca607d4357ce8f90543",
"assets/assets/images/projects/roadmap_automation_generator_1.png": "eae07cd86cb23ac796c27b7968913a3c",
"assets/assets/images/projects/trip_planning_application_1.png": "d8d2b5ca00b64513d0597c3fe3dc7ec7",
"assets/assets/images/projects/puzzle_helper_2.png": "cb15b0830a9b6d53431d486bbb2ab4ad",
"assets/assets/images/projects/fitness_1.png": "06b6626a971e06633978cfcdc5b0213a",
"assets/assets/images/projects/puzzle_helper_1.png": "031e0c34003a9033e5baecd95b7401db",
"assets/assets/images/projects/forum_1.png": "cae6bd877616c347c98112d5f2a6d8f3",
"assets/assets/images/projects/vehicle_5.png": "9caa854f72b80fc543b8a80be79ad585",
"assets/assets/images/projects/ios_1.png": "828644d1291aa0e30c1f62b0aae48d44",
"assets/assets/images/projects/vehicle_4.png": "cd888b407a8f08de0f30acd6cb2a032e",
"assets/assets/images/projects/vehicle_3.png": "ae905116632bea69b6fca3338feea5b0",
"assets/assets/images/projects/vehicle_2.png": "32225a14ca82e36414f145279c4ad1e4",
"assets/assets/images/projects/vehicle_1.png": "74fb14b0ab2a7d6068cbe772ef634a51",
"assets/assets/images/projects/sudoku_helper_1.png": "bf91c8b4634d59b5d1e3a9180ef11580",
"assets/assets/images/projects/python_android_1.png": "1065e312658e82f17f82e68add3e6aa4",
"assets/assets/images/linux.jpg": "98da9bcb89dcb6b455c5e6cf5decc2a1",
"assets/assets/images/resume.png": "6d3418fe72fed6f3b9e1bd0a2f015161",
"assets/assets/images/window11.jpg": "50a94eb216b729dfe33704f2d466ef71",
"assets/assets/images/project.png": "ecdd0b721eb883a4a9057773417ef69b",
"assets/assets/images/macOS.jpeg": "885ee578f5b519b36b5c5e9b8bc2b2d6",
"assets/assets/images/company.png": "1d19873882c3c947c5c0d3ad4e5d199a",
"assets/assets/images/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/profile.png": "055a91979264664a1ee12b9453610d82",
"assets/assets/images/skills/jira.png": "6b6deabad5676259a3f78ce5f86d13e1",
"assets/assets/images/skills/lua.png": "e40b6170e36e82794b13127c974e386e",
"assets/assets/images/skills/code.png": "1d03b329bd9f1f3f6242bbb2c3b975db",
"assets/assets/images/skills/git.png": "150140b2bd5a9ee94633a87850cad7db",
"assets/assets/images/skills/docker.png": "938e34f7f86b4e9a25d607a082925ea8",
"assets/assets/images/skills/python.png": "d3c746b2baa87534de255e2da8d49620",
"assets/assets/images/skills/openai.png": "ddf193d89a2b1fd9f2fdc5b7e5fbceef",
"assets/assets/images/skills/flutter.png": "280061a25e491cd2ab4a6ffd889bc66c",
"assets/assets/images/skills/angular.png": "8abae078f0cb1483a5419055ec4a9ad8",
"assets/assets/images/skills/confluence.png": "ab7263f08cf25a0f51aabb77b23602b9",
"assets/assets/images/skills/extjs.png": "ae2709d206699d1c4db1f540a9d732f6",
"assets/assets/images/skills/grpc.png": "49201c825124cb3cf7e753bb4f07fc12",
"assets/assets/images/skills/oracle.png": "18bb70f7bd4306e4af59a8a93d8c6ba2",
"assets/assets/images/skills/jquery.png": "fb43f7be966613617f8f533bf06f00ca",
"assets/assets/images/skills/firebase.png": "3602dbeac7b595e78e75ceda8f0e9002",
"assets/assets/images/skills/java.png": "f9d4ed21b224a028cd1a732d932a00c1",
"assets/assets/images/skills/aws.png": "ce71ea88ce2901c956f82e07638142ea",
"assets/assets/images/skills/javascript.png": "63cf9c6f8153aef1e884b7ae2815e06d",
"assets/assets/images/skills/gemini.png": "0d9ca4d1ef7778e743a5afcda6310f10",
"assets/assets/images/skills/figma.png": "ad64f0f4d2b1ef94ca2e7e9540cfb1fb",
"assets/assets/images/skills/bootstrap.png": "5468e5a656b7ecebab30cd7095dc8e4c",
"assets/assets/images/skills/postgresql.png": "cb8612b24825ecab4dd04864a8b60baa",
"assets/assets/images/skills/antdesign.png": "f2756c056c5831c8220ed91556b981d7",
"assets/assets/images/skills/springboot.png": "50e687d24370ae983f971709ed3d74fe",
"assets/assets/images/skills/csharp.png": "092184f48ce59818af659d98eca35489",
"assets/assets/images/skills/mysql.png": "b625b91a75fe5d57653f71046df35060",
"assets/assets/images/skills/swift.png": "4b43fdc59e1e22f6890769ca6c2383ec",
"assets/assets/images/skills/liferay.png": "b3e34d3d08be8728bba76e368737f07b",
"assets/assets/images/skills/react.png": "22808bae77c66bd1b33e298ea2f4320e",
"assets/assets/images/skills/methodology.png": "dcd5cdb581660d50185e920f3aab70e9",
"assets/assets/images/skills/tailwindcss.png": "57bb06ccecb9b1154cb0c82a4c1c9192",
"assets/assets/images/skills/expressjs.png": "191dc5e93bbdb90d5ce0371b2a05295b",
"assets/assets/images/skills/mssql.png": "c746da501cd070fb6e2c88ce82136115",
"assets/assets/images/skills/rxjs.png": "29708abea20c942666f33387b874d302",
"assets/assets/images/skills/kafka.png": "a3874100d59c5ee2bbcb37ff65715feb",
"assets/assets/images/skills/swiftui.png": "670a046e35c89e3f9cda8ae00860003e",
"assets/assets/images/skills/photoshop.png": "de025f6a485a3eb0e52f8f700d2de919",
"assets/assets/images/skills/redux.png": "fa8371b5e326ed4b34d46353d2f6d0ca",
"assets/assets/images/skills/typescript.png": "bff6b2788849ed735b91799212e1d4c4",
"assets/assets/images/skills/css.png": "621f21fa891b48023ff7c4dff12c7aa0",
"assets/assets/images/skills/google.png": "3ab3ccb9165decd3e7187eded8615ece",
"assets/assets/images/skills/dart.png": "9facb0eecb231b0ffc7a4443ca397b4c",
"assets/assets/images/skills/mongodb.png": "20d8652c9fd1853ac11a27da7b915ac1",
"assets/assets/images/skills/aurea.png": "9d299ace7d97a9d06e8caa19142ef373",
"assets/assets/images/skills/restfulapi.png": "647246665d7f516aa82cb36d1baef3cc",
"assets/assets/images/skills/html5.png": "837b7493a63d0b927e50ea17f95dfeb5",
"assets/assets/images/skills/kotlin.png": "44fc3a0d1004a766a28c07ecc0a59540",
"assets/assets/images/skills/nodejs.png": "99d580e2755af3d2ee4c763d408f6359",
"assets/assets/images/contacts.png": "519a3a6020629845e12d54405bfdcd3e",
"assets/assets/images/companies/ais.png": "a4693fbd4be59393a0be5361f27f97e6",
"assets/assets/images/companies/hkedcity.png": "e3f0d4cc7c01b1e24f20f53bf388150c",
"assets/assets/images/companies/pv.png": "18fcf3e6ea70425043854cab0b391f10",
"assets/assets/images/companies/semper8.png": "e2cdb535b57e3e97bbf0271f9db8d4f1",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
