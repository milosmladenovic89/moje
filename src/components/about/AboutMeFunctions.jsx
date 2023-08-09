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

export function Section({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.8 })
    return (
        <section className="skewImage" ref={ref}>
            <span
                style={{
                    transform: isInView ? 'rotate(0deg)scale(1)translateY(10px)' : 'perspective(900px)rotateX(60deg)scale(0.7)',
                    opacity: isInView ? 1 : 0.5,

                    transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionShowColor1({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animate-show-text-aboutPage">
            <span
                style={{
                    opacity: isInView ? 1 : 0.1,
                    color: isInView ? "white" : "black",
                    transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 1.4s',
                }}
            >
                {children}
            </span>
        </section>
    )
}


export const TextVariants = {
    offscreen: {
        opacity: 0.5,

    },
    onscreen: {

        opacity: 1,
        transition: {
            duration: 1,

        }
    }
};
export const TextVariants2 = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.3
        }
    }
};
export const TextVariants3 = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.6
        }
    }
};
export const TextVariants4 = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.8
        }
    }
};

export const TextVariants5 = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1
        }
    }
};
export const TextVariants6 = {
    offscreen: {
        opacity: 0
    },
    onscreen: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.2
        }
    }
};

