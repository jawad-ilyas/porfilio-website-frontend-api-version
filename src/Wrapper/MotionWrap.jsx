import react from "react"
import { MotionConfig, motion } from "framer-motion"


const MotioWrap = (Component) => {

    return () => {
        return <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}

        >
            <Component />
        </motion.div >
    }
}

export default MotioWrap