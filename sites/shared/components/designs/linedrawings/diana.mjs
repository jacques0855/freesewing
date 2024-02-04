import { LineDrawingWrapper, thin, dashed } from './shared.mjs'

const strokeScale = 0.5

export const Diana = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 282 111" {...{ className, stroke }}>
      <Front stroke={stroke} />
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the front
 */
export const DianaFront = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 141 111" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the back
 */
export const DianaBack = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="141 0 141 111" {...{ className, stroke }}>
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * SVG elements for the front
 */
export const Front = ({ stroke }) => (
  <>
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="m 101.23493,96.671024 c -0.7956,0.2196 -1.1822,0.5256 -2.589803,0.8388 -4.086,0.9108 -7.8012,1.3464 -14.616007,1.6812 -4.0356,0.198 -9.0252,0.3564 -14.7852,0.3348 m -30.6,-2.8548 c 0.7956,0.2196 1.5912,0.5256 2.9988,0.8388 4.086,0.9108 7.8012,1.3464 14.616,1.6812 4.0356,0.198 9.0252,0.3564 14.7852,0.3348 m 65.43933,2.325596 -11.9484,5.0112 m -121.5972056,-5.0112 11.9483996,5.0112 M 83.381408,3.8828376 c -0.5688,0.3059999 -0.983088,0.6929929 -1.980288,1.1537929 -1.3716,0.6336 -3.0672,1.4184 -5.1552,1.9836 -1.3788,0.3744 -3.402,0.7776 -5.9508,0.792 h -0.396 c -2.5488,-0.0144 -4.572,-0.4212 -5.9508,-0.792 -2.088,-0.5652 -3.7836,-1.35 -5.1552,-1.9836 -0.9972,-0.4608 -1.483794,-0.847793 -2.052594,-1.1537929"
    />
    <path
      key="folds"
      opacity={0.3}
      d="m 93.189647,69.537829 c -0.2016,0.8964 -0.4068,1.7892 -0.5796,2.6892 -0.1836,0.8964 -0.3456,1.8 -0.486,2.7036 -0.2844,1.8072 -0.5148,3.6252 -0.6444,5.4468 -0.1584,1.8216 -0.2088,3.654 -0.2124,5.4828 0,1.8288 0.0756,3.6612 0.1944,5.493598 -0.1368,-0.9072 -0.2304,-1.821598 -0.3168,-2.735998 -0.072,-0.9144 -0.1224,-1.8324 -0.1548,-2.754 -0.054,-1.8396 0,-3.6792 0.1332,-5.5152 0.162,-1.8324 0.3888,-3.6612 0.7308,-5.4684 0.342,-1.8072 0.7812,-3.5964 1.3356,-5.346 z m 6.5772,-27.7992 c -0.6228,1.836 -1.3896,3.6252 -2.2824,5.3532 -0.8856,1.7316 -1.9044,3.3912 -3.0024,4.9968 -1.1268,1.584 -2.3364,3.1104 -3.6504,4.5432 -0.6624,0.7128 -1.3392,1.4076 -2.0376,2.0808 -0.7092,0.6624 -1.4256,1.3176 -2.178,1.9332 1.3968,-1.3464 2.7396,-2.7396 4.0104,-4.1976 1.2636,-1.4616 2.466,-2.9772 3.564,-4.5648 1.116,-1.5768 2.1204,-3.2292 3.0528,-4.9212 0.4752,-0.8424 0.9108,-1.7064 1.3284,-2.5776 0.4284,-0.8676 0.8172,-1.7568 1.1988,-2.646 z m -53.377203,27.7992 c 0.5544,1.7496 0.9936,3.5388 1.3356,5.346 0.342,1.8072 0.5688,3.636 0.7308,5.4684 0.1296,1.836 0.1872,3.6756 0.1332,5.5152 -0.0324,0.918 -0.0828,1.836 -0.1548,2.754 -0.0864,0.9144 -0.18,1.828798 -0.3168,2.735998 0.1188,-1.832398 0.1944,-3.661198 0.1944,-5.493598 -0.0036,-1.8288 -0.0576,-3.6612 -0.2124,-5.4828 -0.1296,-1.8252 -0.36,-3.6396 -0.6444,-5.4468 -0.1404,-0.9036 -0.306,-1.8036 -0.486,-2.7036 -0.1728,-0.9 -0.3744,-1.7928 -0.5796,-2.6892 z m -6.5736,-27.7992 c 0.3852,0.8892 0.774,1.7784 1.1988,2.646 0.4176,0.8712 0.8532,1.7352 1.3284,2.5776 0.9324,1.692 1.9368,3.3444 3.0528,4.9212 1.0944,1.5912 2.3004,3.1032 3.564,4.5648 1.2672,1.458 2.6136,2.8512 4.0104,4.1976 -0.7488,-0.6156 -1.4652,-1.2708 -2.178,-1.9332 -0.6984,-0.6732 -1.3752,-1.3716 -2.0376,-2.0808 -1.314,-1.4328 -2.5236,-2.9592 -3.6504,-4.5432 -1.098,-1.6056 -2.1168,-3.2652 -3.0024,-4.9968 -0.8928,-1.728 -1.6596,-3.5172 -2.2824,-5.3532 z m 41.2128,9.4212 c 1.8396,-1.2348 3.4704,-2.754 4.856403,-4.4676 1.386,-1.7136 2.5416,-3.6036 3.4704,-5.6016 0.954,-1.9872 1.6848,-4.0752 2.2824,-6.1992 0.2988,-1.062 0.558,-2.1384 0.7704,-3.222 0.234,-1.08 0.4104,-2.1744 0.5724,-3.2688 -0.3528,4.4172 -1.4184,8.8056 -3.3012,12.8448 -0.9648,2.0052 -2.1348,3.924 -3.582,5.6232 -0.3708,0.4176 -0.756,0.8172 -1.134,1.2276 -0.3888,0.3996 -0.799203,0.774 -1.220403,1.1376 -0.8532,0.7164 -1.7532,1.3716 -2.7144,1.9224 z m -3.9816,-4.5 c 1.0476,-0.4176 2.0232,-0.99 2.8836,-1.6956 0.8496,-0.7164 1.6164,-1.5336 2.2608,-2.4408 0.6552,-0.9 1.1844,-1.8864 1.6596,-2.9016 0.4644,-1.0188 0.838803,-2.0808 1.166403,-3.1608 -0.0864,0.558 -0.2196,1.1088 -0.3636,1.656 -0.154803,0.5472 -0.342003,1.08 -0.547203,1.6128 -0.4212,1.0548 -0.9576,2.07 -1.62,3.0024 -0.6696,0.9252 -1.4688,1.764 -2.3832,2.448 -0.4608,0.3384 -0.9504,0.6372 -1.458,0.8892 -0.5148,0.2412 -1.0476,0.45 -1.5948,0.5868 z M 91.263647,4.8062305 c 0.0756,2.34 0.108,4.6764 0.1368,7.0163985 0.0612,2.3436 -0.0252,4.6908 -0.2376,7.0272 -0.2412,2.3328 -0.5904,4.6548 -1.098,6.9444 -0.504,2.2896 -1.1484,4.5468 -1.9332,6.75 0.3204,-1.1268 0.63,-2.2536 0.9036,-3.3876 0.2844,-1.134 0.5364,-2.2752 0.7596,-3.42 0.45,-2.2896 0.8028,-4.6008 1.0116,-6.9228 0.1188,-1.1592 0.198,-2.3256 0.2556,-3.4884 0.018,-0.5832 0.0504,-1.1664 0.0504,-1.7496 l 0.018,-1.7496 c 0.0288,-2.3399985 0.0648,-4.6799985 0.1368,-7.0199985 z m -3.6324,-1.4400001 c 0.1404,1.6524001 0.1836,3.3084001 0.1584,4.9680001 -0.0252,1.6596 -0.1368,3.3155985 -0.2988,4.9643985 -0.1836,1.6488 -0.4176,3.294 -0.7344,4.9212 -0.1656,0.8136 -0.3348,1.6236 -0.5292,2.43 -0.2052,0.8028 -0.4104,1.6056 -0.6552,2.3976 0.3348,-1.6236 0.6516,-3.2436 0.9108,-4.8744 0.2628,-1.6308 0.4932,-3.2652 0.6516,-4.9068 0.1908,-1.6416 0.2952,-3.2867985 0.378,-4.9355985 0.0432,-0.8244 0.0684,-1.6488 0.0864,-2.4768 0.0252,-0.828 0.0252,-1.6524 0.0324,-2.4804001 z m -32.450403,19.8215986 1.7316,3.5676 c 0.576,1.1916 1.1124,2.3904 1.7064,3.5676 1.2384,2.3148 2.7648,4.4928 4.6728,6.2856 1.8864,1.8036 4.1796,3.222 6.7176,3.87 2.5308,0.6768 5.2488,0.5436 7.776,-0.216 -1.242,0.4536 -2.5524,0.7272 -3.8772,0.8244 -1.3248,0.0792 -2.6676,-0.0252 -3.9672,-0.3384 -2.61,-0.6048 -4.9644,-2.0592 -6.8976,-3.8772 -1.9224,-1.8504 -3.474,-4.0572 -4.6692,-6.4188 -1.1124,-2.412 -2.1528,-4.8276 -3.1932,-7.2612 z M 85.500047,2.9018304 c 0.054,2.4696001 0.0936,4.9392001 0.1152,7.4087986 v 0.0072 0 c 0,0 -0.432,3.8484 -0.432,3.8484 -0.18,1.2744 -0.3816,2.5488 -0.6156,3.8196 -0.234003,1.2672 -0.504003,2.5308 -0.813603,3.7872 -0.3168,1.2528 -0.6876,2.4912 -1.0944,3.7152 -0.8172,2.4516 -1.8396,4.8348 -3.0816,7.0992 -1.2384,2.2644 -2.7108,4.4028 -4.3848,6.3576 1.584,-2.0304 2.9808,-4.1976 4.176,-6.4728 1.1772,-2.2824 2.178,-4.6512 2.9736,-7.092 0.7956,-2.4372 1.4148,-4.9356 1.9008,-7.4556 0.2412,-1.26 0.450003,-2.5308 0.637203,-3.8016 l 0.5076,-3.8196 v 0.0108 c 0.0216,-2.4695985 0.0612,-4.9391985 0.1152,-7.4087986 z m -33.440403,26.4671986 0.9864,3.1608 0.9684,3.1644 v -0.0108 c 0.5184,1.224 1.1268,2.4156 1.836,3.5352 0.6948,1.1304 1.4832,2.2068 2.3688,3.1968 1.764,1.9872 3.8988,3.6216 6.2532,4.8564 2.3436,1.2528 4.932,2.0124 7.5816,2.2284 2.6532,0.2052 5.3388,-0.1476 7.8912,-0.9432 -2.5128,0.9072 -5.22,1.35 -7.9092,1.188 -2.6892,-0.144 -5.3388,-0.9144 -7.722,-2.1708 -2.4012,-1.2204 -4.5684,-2.9088 -6.3396,-4.9392 -1.7856,-2.0232 -3.1608,-4.3812 -4.1616,-6.8688 v -0.0072 c 0,0 -0.0036,-0.0036 -0.0036,-0.0036 l -0.882,-3.1896 z m -8.7372,-3.3372 c 0.234,2.5848 0.6048,5.1444 1.0944,7.6896 0.4716,2.5452 1.1052,5.0508 2.0412,7.4628 0.4428,1.2168 0.9,2.4228 1.4904,3.564 0.5832,1.1448 1.3068,2.214 2.142,3.186 1.674,1.9476 3.9132,3.4056 6.3864,4.1796 -1.2564,-0.3168 -2.466,-0.8316 -3.5892,-1.4976 -1.1124,-0.684 -2.1276,-1.5228 -3.006,-2.4948 -0.8856,-0.9648 -1.62,-2.0628 -2.2248,-3.2184 -0.6084,-1.1592 -1.0836,-2.376 -1.5372,-3.5928 -0.9108,-2.4372 -1.5624,-4.9752 -1.9728,-7.5384 -0.2088,-1.2816 -0.4068,-2.5632 -0.5472,-3.8556 -0.1332,-1.2924 -0.2376,-2.5848 -0.2772,-3.8808 z m 4.3956,-20.8655985 c 0.0756,2.3328 0.108,4.6584 0.1368,6.9839985 0.0792,2.3256 0.1584,4.6512 0.36,6.9696 0.1692,2.3184 0.4536,4.626 0.8028,6.9264 0.3492,2.3004 0.792,4.5828 1.2924,6.8616 -0.324,-1.1196 -0.6048,-2.25 -0.8712,-3.3876 -0.2556,-1.1376 -0.486,-2.2824 -0.6912,-3.4308 -0.4068,-2.2968 -0.6912,-4.6188 -0.8892,-6.9408 -0.1728,-2.3292 -0.2556,-4.662 -0.2772,-6.9912 0.0288,-2.3327985 0.0648,-4.6619985 0.1368,-6.9911985 z m 5.1876,-1.1844001 c 0.2628,1.5840001 0.5652,3.1608001 0.9324,4.7196001 0.3564,1.5623985 0.7632,3.1139985 1.2312,4.6439985 0.4644,1.5336 0.99,3.042 1.53,4.554 0.5364,1.5084 1.0908,3.0132 1.7244,4.482 0.63,1.4688 1.3464,2.898 2.2392,4.2156 0.8964,1.3104 1.9944,2.4804 3.2724,3.4236 1.2816,0.9324 2.7576,1.6056 4.3128,1.9512 0.7776,0.18 1.5696,0.2808 2.3688,0.3168 0.7992,0.0396 1.602,-0.018 2.3976,-0.0936 -1.584,0.2592 -3.2184,0.2628 -4.806,-0.0504 -1.584,-0.3168 -3.1068,-0.972 -4.4388,-1.9008 -1.332,-0.9288 -2.4552,-2.1384 -3.384,-3.4632 -0.918,-1.3356 -1.656,-2.7828 -2.3004,-4.2588 -0.63,-1.4832 -1.1736,-2.9988 -1.7028,-4.5144 -0.522,-1.5156 -1.062,-3.0348 -1.4868,-4.5864 -0.8784,-3.0924 -1.5192,-6.2531985 -1.8972,-9.4427986 z"
    />
    <path
      key="outline"
      d="m 83.599244,2.2574304 c -0.5616,0.3024 -1.7604,1.1124 -2.7432,1.5696 -1.3572,0.6264001 -3.0348,1.4040001 -5.0976,1.9620001 -1.3644,0.3672 -3.3624,0.7704 -5.8824,0.7848 h -0.3924 c -2.52,-0.0144 -4.518,-0.414 -5.8824,-0.7848 -2.0628,-0.558 -3.7404,-1.332 -5.0976,-1.9620001 -0.9864,-0.4572 -2.1816,-1.2636 -2.7432,-1.5696 M 99.795647,42.030229 c 0,0 -6.8004,26.6832 -6.9444,28.1412 -0.2088,2.1564 0.2736,3.8268 0.558,4.788 0.4572,1.548 4.194,10.2456 8.233203,24.191995 -0.7956,0.2196 -1.951203,0.5256 -3.358803,0.8388 -4.086,0.910796 -7.8012,1.346396 -14.616003,1.681196 -4.0356,0.198 -9.0252,0.3564 -14.7852,0.3348 m -29.1132,-59.975991 c 0,0 6.8004,26.6832 6.9444,28.1412 0.2088,2.1564 -0.2736,3.8268 -0.558,4.788 -0.4572,1.548 -4.194,10.2456 -8.2332,24.191995 0.7956,0.2196 1.9512,0.5256 3.3588,0.8388 4.086,0.910796 7.8012,1.346396 14.616,1.681196 4.0356,0.198 9.0252,0.3564 14.7852,0.3348 M 99.594047,7.9634305 c 0.651603,0.3492 1.591203,0.9396 2.494803,1.89 1.7928,1.8827985 2.3436,4.0175985 2.4804,4.4999985 0.918,3.1824 13.6872,37.8 32.6556,89.297991 l -11.9484,5.0076 L 99.633647,42.465829 M 39.859244,7.9634305 c -0.6516,0.3492 -1.5912,0.9396 -2.4948,1.89 -1.7928,1.8827985 -2.3436,4.0175985 -2.4804,4.4999985 -0.918,3.1824 -13.6872,37.8 -32.6555996,89.297991 l 11.9483996,5.0076 25.6428,-66.193191 m 43.7904,-40.2587986 c -0.5616,1.6596 -1.7604,6.0948001 -2.7432,8.5931986 -1.3572,3.4344 -3.0348,7.6824 -5.0976,10.7388 -1.3644,2.0196 -3.3624,4.212 -5.8824,4.2948 h -0.3924 c -2.52,-0.0828 -4.518,-2.2752 -5.8824,-4.2948 -2.0628,-3.0564 -3.7404,-7.3044 -5.0976,-10.7388 -0.9864,-2.4947985 -2.1816,-6.9299986 -2.7432,-8.5931986 m 0,-0.0036 -16.0776,5.8824001 c 0.216,0.7776 0.4968,1.8504 0.7848,3.1355985 1.4256,6.3684 1.5516,11.466 1.5696,13.3308 0.0504,6.2532 -0.8784,11.0448 -1.5696,14.508 -0.2916,1.458 -0.5724,2.6676 -0.7848,3.528 m 59.990403,0 c -0.2124,-0.8604 -0.4932,-2.07 -0.7848,-3.528 -0.6912,-3.4632 -1.62,-8.2548 -1.5696,-14.508 0.0144,-1.8684 0.144,-6.9624 1.5696,-13.3308 0.288,-1.2887985 0.5688,-2.3615985 0.7848,-3.1355985 L 83.606444,2.2034304"
    />
  </>
)

/*
 * SVG elements for the back
 */
const Back = ({ stroke }) => (
  <>
    <path
      key="outline"
      d="m 242.61125,42.023029 c 0,0 -6.8004,26.6832 -6.9444,28.1412 -0.2088,2.1564 0.2736,3.8268 0.558,4.788 0.4572,1.548 4.194,10.2456 8.2332,24.191995 -0.7956,0.2196 -1.9512,0.5256 -3.3588,0.8388 -4.086,0.910796 -7.8012,1.346396 -14.616,1.681196 -4.0356,0.198 -9.0252,0.3564 -14.7852,0.3348 m -29.1096,-59.975991 c 0,0 6.8004,26.6832 6.9444,28.1412 0.2088,2.1564 -0.2736,3.8268 -0.558,4.788 -0.4572,1.548 -4.194,10.2456 -8.2332,24.191995 0.7956,0.2196 1.9512,0.5256 3.3588,0.8388 4.086,0.910796 7.8012,1.346396 14.616,1.681196 4.0356,0.198 9.0252,0.3564 14.7852,0.3348 m 29.1888,-94.3523895 c 0.6516,0.3492 1.5912,0.9396 2.4948,1.89 1.7928,1.8827985 2.3436,4.0175985 2.4804,4.4999985 0.918,3.1824 13.6872,37.8 32.6556,89.297991 l -11.9484,5.0076 -25.6428,-66.193191 m -60.084,-34.5023985 c -0.6516,0.3492 -1.5912,0.9396 -2.4948,1.89 -1.7928,1.8827985 -2.3436,4.0175985 -2.4804,4.4999985 -0.918,3.1824 -13.6872,37.8 -32.6556,89.297991 l 11.9484,5.0076 25.6428,-66.193191 m 60.3216,0.4392 c -1.3788,-4.302 -2.736,-10.2384 -2.7432,-17.2512 -0.0108,-7.686 1.5984,-13.2948 1.962,-14.508 0.3636,-1.2167985 0.7164,-2.2247985 0.9792,-2.9411985 l -16.434,-5.6844001 c -0.6444,0.54 -1.3716,1.0728 -2.1888,1.5696 -4.2588,2.5920001 -8.676,2.8584001 -11.3724,2.7432001 h -0.9792 c -2.6964,0.1116 -7.11,-0.1512 -11.3724,-2.7432001 -0.8172,-0.4968 -1.5444,-1.0296 -2.1888,-1.5696 l -16.434,5.6844001 c 0.2664,0.7164 0.6192,1.7208 0.9792,2.9411985 0.36,1.2132 1.9728,6.8184 1.962,14.508 -0.0108,7.0128 -1.368,12.9492 -2.7432,17.2512"
    />
    <path
      key="folds"
      opacity={0.3}
      d="m 233.61125,28.422229 -0.6768,3.3588 -0.3384,1.6812 -0.1728,0.8388 -0.198,0.8352 c -0.5292,2.2248 -1.116,4.4352 -1.7676,6.624 -1.296,4.3848 -2.8548,8.694 -4.608,12.9168 -1.7856,4.212 -3.7512,8.3448 -5.9652,12.348 -1.1124,1.998 -2.2464,3.9816 -3.456,5.922 -1.1988,1.944 -2.4696,3.8448 -3.7512,5.7348 1.2348,-1.9224 2.4552,-3.852 3.6,-5.8284 1.1772,-1.9548 2.2824,-3.9528 3.3624,-5.9616 2.16,-4.0212 4.122,-8.1432 5.8788,-12.3552 1.7784,-4.2012 3.3264,-8.4996 4.6764,-12.8556 0.6804,-2.178 1.296,-4.3776 1.8612,-6.588 l 0.2196,-0.828 0.1944,-0.8352 0.3816,-1.6704 0.7632,-3.3408 z m 2.4408,41.6124 c -0.2016,0.8964 -0.4068,1.7892 -0.5796,2.6892 -0.1836,0.8964 -0.3456,1.8 -0.486,2.7036 -0.2844,1.8072 -0.5148,3.6252 -0.6444,5.4468 -0.1584,1.8216 -0.2088,3.654 -0.2124,5.4828 0,1.8288 0.0756,3.6612 0.1944,5.493598 -0.1368,-0.9072 -0.2304,-1.821598 -0.3168,-2.735998 -0.072,-0.9144 -0.1224,-1.8324 -0.1548,-2.754 -0.054,-1.8396 0,-3.6792 0.1332,-5.5152 0.162,-1.8324 0.3888,-3.6612 0.7308,-5.4684 0.342,-1.8072 0.7812,-3.5964 1.3356,-5.346 z m -46.8,0 c 0.5544,1.7496 0.9936,3.5388 1.3356,5.346 0.342,1.8072 0.5688,3.636 0.7308,5.4684 0.1296,1.836 0.1872,3.6756 0.1332,5.5152 -0.0324,0.918 -0.0828,1.836 -0.1548,2.754 -0.0864,0.9144 -0.18,1.828798 -0.3168,2.735998 0.1188,-1.832398 0.1944,-3.661198 0.1944,-5.493598 -0.004,-1.8288 -0.0576,-3.6612 -0.2124,-5.4828 -0.1296,-1.8252 -0.36,-3.6396 -0.6444,-5.4468 -0.1404,-0.9036 -0.306,-1.8036 -0.486,-2.7036 -0.1728,-0.9 -0.3744,-1.7928 -0.5796,-2.6892 z"
    />
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="m 243.66424,96.829954 c -0.7956,0.2196 -1.15739,0.39907 -2.56499,0.71227 -4.086,0.9108 -7.8012,1.3464 -14.616,1.6812 -4.0356,0.198 -9.0252,0.3564 -13.8852,0.3348 -4.86,0.0216 -9.8496,-0.1368 -13.8852,-0.3348 -6.8148,-0.3348 -10.53,-0.7704 -14.616,-1.6812 -1.4076,-0.3132 -1.80554,-0.45652 -2.60114,-0.67612 m 98.04793,4.466916 -11.94838,5.0076 m -121.96441,-5.0076 11.9484,5.0076 m 70.38,-103.7591896 c -0.27,0.2484 -0.54,0.4932 -0.81,0.7416 -0.6768,0.5436 -1.4364,1.0800001 -2.2896,1.5804001 -4.4532,2.6136 -9.0684,2.88 -11.8872,2.7648 h -1.026 c -2.8152,0.1116 -7.434,-0.1512 -11.8872,-2.7648 -0.8532,-0.5004 -1.6128,-1.0368001 -2.2896,-1.5804001 -0.2772,-0.2448 -0.5508,-0.486 -0.828,-0.7308"
    />
  </>
)
