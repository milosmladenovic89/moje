import React, { useRef } from 'react'
import { useInView } from 'framer-motion'
import '../../styles/AboutMe.css'



export function SectionTextAbout0({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animate-text-aboutPage">
            <span
                style={{
                    transform: isInView ? "translateX(0)" : "translateX(-385px)",
                    transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s',
                }}
            >
                {children}
            </span>
        </section>
    )
}
export function SectionTextAbout({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animate-text-aboutPage">
            <span
                style={{
                    
                    transform: isInView ? "translateY(0)" : "translateY(85px)",
                    transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.2s',
                }}
            >
                {children}
            </span>
        </section>
    )
}
export function SectionTextAbout2({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animate-text-aboutPage">
            <span
                style={{
                    transform: isInView ? "translateY(0)" : "translateY(85px)",
                    transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s',
                }}
            >
                {children}
            </span>
        </section>
    )
}
export function SectionTextAbout3({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animate-text-aboutPage">
            <span
                style={{
                    transform: isInView ? "translateY(0)" : "translateY(85px)",
                    transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s',
                }}
            >
                {children}
            </span>
        </section>
    )
}