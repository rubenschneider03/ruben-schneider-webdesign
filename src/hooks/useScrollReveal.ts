'use client'
import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    const children = el.querySelectorAll('.reveal')
    children.forEach(c => observer.observe(c))
    if (el.classList.contains('reveal')) observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}
