import { motion, useAnimation } from 'framer-motion'
import axios from 'axios'
import { useEffect, useState } from 'react'

const LoadingBar = () => {
    const [loadingProgress, setLoadingProgress] = useState(0)
    const controls = useAnimation()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://example.com/api/data')
                setLoadingProgress(100)
            } catch (error) {
                console.error('Error fetching data:', error)
                // Handle error if needed
            }
        }

        // Start loading animation
        controls.start({ scaleX: loadingProgress / 100 })

        // Fetch data
        fetchData()

        // Cleanup animation on component unmount
        return () => controls.stop()
    }, [controls, loadingProgress])

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-1 bg-Green-300 origin-left"
            initial={{ scaleX: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
        />
    )
}

export default LoadingBar
