import React, { useState, useRef, useEffect } from 'react'
import '../../styles/Home.css'
import { useInView } from 'framer-motion'



export function SectionText0({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animation-text-firstPage">
            <span
                style={{

                    transform: isInView ? "translateY(0)" : "translateY(70px)",
                    transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    )
}
export function SectionText01({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animation-text-firstPage">
            <span
                style={{

                    transform: isInView ? "translateY(0)" : "translateY(70px)",
                    transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    )
}
export function SectionText02({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animation-text-firstPage">
            <span
                style={{

                    transform: isInView ? "translateY(0)" : "translateY(70px)",
                    transition: 'all 0.45s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionText03({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animation-text-firstPage">
            <span
                style={{

                    transform: isInView ? "translateY(0)" : "translateY(70px)",
                    transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionText04({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animation-text-firstPage">
            <span
                style={{
                    transform: isInView ? "translateY(0)" : "translateY(70px)",
                    transition: 'all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionText3({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="anime22">
            <span
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateX(0)' : 'translateX(-200px)',
                    transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionText3MobileLeft({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section ref={ref} className="anime-left">
            <span
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateX(0)' : 'translateX(-200px)',
                    transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionText3MobileRight({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section ref={ref} className="anime-right">
            <span
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateX(0)' : 'translateX(200px)',
                    transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionText3Left({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="anime22-left">
            <span
                style={{
                    opacity: isInView ? 1 : 0,

                    transform: isInView ? 'translateX(0)' : 'translateX(200px)',
                    transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section>
    )
}



export function SectionImg2({ children }) {

    const [mobile, setMobile] = useState(window.innerWidth)

    useEffect(() => {
        const mobileWidth = () => {
            setMobile(window.innerWidth)
        }
        window.addEventListener('resize', mobileWidth)

        return () => {
            window.removeEventListener('resize', mobileWidth)
        }
    }, [])


    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="animeImage2">
            <span

                style={{
                    transform: 'translate(-50%, -50%)',
                    top: '50%',
                    left: '50%',
                    width:
                        mobile > 600
                            ? isInView
                                ? '50vw'
                                : '10vw'
                            : mobile < 600 && isInView
                                ? '80vw'
                                : '30vw',
                    height:
                        mobile > 600
                            ? isInView
                                ? '55vh'
                                : '20vh'
                            : mobile < 600 && isInView
                                ? '20vh'
                                : '10vh',
                    zIndex: 999,
                    transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionHr({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section className='animeHr' ref={ref}>
            <span
                style={{
                    transformOrigin: "0%",
                    width: isInView ? '100%' : '0%',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
                }}
            >
                {children}
            </span>
        </section>
    )
}
export function SectionHrRightToLeft({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section className='animeHr-right' ref={ref}>
            <span
                style={{
                    transformOrigin: "0%",
                    width: isInView ? '100%' : '0%',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionHrLast({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section className='animeHr-last' ref={ref}>
            <span
                style={{
                    transformOrigin: "0%",
                    width: isInView ? '100%' : '0%',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
                }}
            >
                {children}
            </span>
        </section>
    )
}
export function SectionSpan({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='halfSpan' ref={ref}>
            <span
                style={{
                    width: isInView ? '100%' : '0%',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionSpan2({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='halfSpan2' ref={ref}>
            <span
                style={{
                    transformOrigin: "right",
                    width: isInView ? '100%' : '0%',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionSpanBottom({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='halfSpanBottom' ref={ref}>
            <span
                style={{
                    transformOrigin: "right",
                    width: isInView ? '100%' : '0%',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionSpanBottom2({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='halfSpanBottom2' ref={ref}>
            <span
                style={{
                    transformOrigin: "right",
                    width: isInView ? '100%' : '0%',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
                }}
            >
                {children}
            </span>
        </section>
    )
}

export function SectionHover({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section className='animeHover' ref={ref}>
            <span
                style={{

                    visibility: isInView ? "visible" : "hidden",
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 2s',
                }}
            >
                {children}
            </span>
        </section >
    )
}




export function SectionProjects({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateX(0) translateY(120px)' : 'translateX(-500px)',

                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
                }}
            >
                {children}
            </span>
        </section >
    )
}
export function SectionProjects2({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateX(0) translateY(120px)' : 'translateX(500px)',

                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s',
                }}
            >
                {children}
            </span>
        </section >
    )
}
export function SectionProjects3({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(120px)' : 'translateY(500px)',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
                }}
            >
                {children}
            </span>
        </section >
    )
}
export function SectionProjects4({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(120px)' : 'translateY(-500px)',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s',
                }}
            >
                {children}
            </span>
        </section >
    )
}

export function SectionProjects5({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(120px) translateX(0)' : 'translateY(200px) translateX(200px)',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
                }}
            >
                {children}
            </span>
        </section >
    )
}

export function SectionProjects6({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'translateY(120px) translateX(0)' : 'translateY(-200px) translateX(-200px)',
                    transition: 'all 1.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s',
                }}
            >
                {children}
            </span>
        </section >
    )
}

export function SectionImgMosaic1({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    zIndex: 1000000,
                    transform: isInView ? 'rotate(0deg)scale(1)' : 'perspective(900px)rotateX(180deg)scale(0.1)',
                    opacity: isInView ? 1 : 0,
                    position: "absolute",
                    left: isInView ? "5%" : "70%",
                    top: isInView ? "5%" : "70%",
                    transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section >
    )
}

export function SectionImgMosaic2({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    zIndex: 1000000,
                    transform: isInView ? 'rotate(0deg)scale(1)' : 'perspective(900px)rotateX(180deg)scale(0.1)',
                    opacity: isInView ? 1 : 0,
                    position: "absolute",
                    right: isInView ? "5%" : "70%",
                    top: isInView ? "5%" : "70%",
                    transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section >
    )
}

export function SectionImgMosaic3({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    zIndex: 1000000,
                    transform: isInView ? 'rotate(0deg)scale(1)' : 'perspective(900px)rotateX(180deg)scale(0.1)',
                    opacity: isInView ? 1 : 0,
                    position: "absolute",
                    right: isInView ? "5%" : "70%",
                    bottom: isInView ? "5%" : "70%",
                    transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section >
    )
}

export function SectionImgMosaic4({ children }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    zIndex: 1000000,
                    transform: isInView ? 'rotate(0deg)scale(1)' : 'perspective(900px)rotateX(180deg)scale(0.1)',
                    opacity: isInView ? 1 : 0,
                    position: "absolute",
                    left: isInView ? "5%" : "70%",
                    bottom: isInView ? "5%" : "70%",
                    transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section >
    )
}
export function SectionImgMosaic5({ children }) {
    const ref = useRef(null)
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const winWidth = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", winWidth)

        return () => {
            window.removeEventListener("resize", winWidth)
        }
    }, [])
    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects' ref={ref}>
            <span
                style={{
                    zIndex: 1000000,
                    transform: isInView ? 'rotate(0deg)scale(1)' : 'perspective(900px)rotateX(180deg)scale(0.1)',
                    opacity: isInView ? 1 : 0,
                    position: "absolute",
                    left: (isInView && width > 768) ? "40%" : (isInView && width < 768) ? "32%" : "20%",
                    top: isInView ? "40%" : "20%",
                    transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section >
    )
}

export function SectionImgMosaic6({ children }) {
    const ref = useRef(null)


    const isInView = useInView(ref, { amount: 1 })
    return (
        <section className='animeProjects-arrowDown' ref={ref}>
            <span
                style={{
                    zIndex: 1000000,
                    transform: isInView ? 'rotate(0deg)scale(1)' : 'perspective(900px)rotateX(180deg)scale(0.1)',
                    opacity: isInView ? 1 : 0,
                    position: "absolute",
                    left: isInView ? "48.5%" : "20%",
                    top: isInView ? "70%" : "20%",
                    transition: 'all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
                }}
            >
                {children}
            </span>
        </section >
    )
}
