import Clear from "../assets/Clear.png"
import Hail from "../assets/Hail.png"
import LightCloud from "../assets/LightCloud.png"
import HeavyCloud from "../assets/HeavyCloud.png"
import LightRain from "../assets/LightRain.png"
import HeavyRain from "../assets/HeavyRain.png"
import Shower from "../assets/Shower.png"
import Sleet from "../assets/Sleet.png"
import Snow from "../assets/Snow.png"
import Thunderstorm from "../assets/Thunderstorm.png"

export default function conditionImageSelecter(condCode: number) {
    const conditionCodes = {
        clear: [1000],
        lightCloud: [1003, 1135],
        heavyCloud: [1006, 1009, 1030],
        lightRain: [1063, 1180, 1183, 1186],
        heavyRain: [1189, 1192, 1195, 1243, 1246],
        shower: [1150, 1153, 1240, 1258],
        sleet: [1066, 1072, 1168, 1171, 1198, 1201, 1204, 1207, 1237, 1249, 1252, 1255, 1261, 1264],
        snow: [1114, 1117, 1210, 1213, 1216, 1219],
        hail: [1069, 1147, 1225, 1222],
        thunderstorm: [1087, 1273, 1276, 1279, 1282]
    }

    if (conditionCodes.clear.includes(condCode)) return Clear
    if (conditionCodes.lightCloud.includes(condCode)) return LightCloud
    if (conditionCodes.heavyCloud.includes(condCode)) return HeavyCloud
    if (conditionCodes.lightRain.includes(condCode)) return LightRain
    if (conditionCodes.heavyRain.includes(condCode)) return HeavyRain
    if (conditionCodes.shower.includes(condCode)) return Shower
    if (conditionCodes.sleet.includes(condCode)) return Sleet
    if (conditionCodes.snow.includes(condCode)) return Snow
    if (conditionCodes.hail.includes(condCode)) return Hail
    if (conditionCodes.thunderstorm.includes(condCode)) return Thunderstorm

    return LightCloud
}