import { Box} from "@react-three/drei"

import { MeModel } from "../../public/Me"
export default function Character({animation}) {
    return <MeModel rotation={[0,Math.PI,0]} animation={animation}/>
}