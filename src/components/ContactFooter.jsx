import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, Github, Twitter, Linkedin, ArrowUp, Copy, Check, Phone } from 'lucide-react'
import { useState } from 'react'
import { personalInfo } from '../data/placeholder'

export default function ContactFooter() {
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [80, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  ]

  return (
    <motion.footer
      ref={ref}
      id="contact"
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-overlay-bottom" />
      <div className="absolute inset-0 dot-bg opacity-15" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto py-20">
        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent mx-auto mb-12"
        />

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
        >
          <span className="text-gradient">Let&apos;s Talk</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg text-zinc-400 mb-12 leading-relaxed"
        >
          如果你对我的经历感兴趣，或者想聊聊产品、技术与创新，
          <br className="hidden sm:block" />
          欢迎随时联系我。
        </motion.p>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full glass card-hover"
          >
            <Mail size={18} className="text-teal-400" />
            <span className="text-zinc-300 text-base">{personalInfo.email}</span>
            {copied ? (
              <Check size={16} className="text-teal-400" />
            ) : (
              <Copy size={16} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
            )}
          </button>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass">
            <Phone size={18} className="text-teal-400" />
            <span className="text-zinc-400 text-base">{personalInfo.phone}</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center card-hover text-zinc-400 hover:text-teal-400 transition-colors"
              aria-label={link.label}
            >
              <link.icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-zinc-600 text-sm mb-8"
        >
          {personalInfo.location}
        </motion.p>

        {/* Back to top */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 text-zinc-600 hover:text-teal-400 transition-colors text-sm"
        >
          <ArrowUp size={16} />
          回到顶部
        </motion.button>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-zinc-700 text-xs mt-20"
        >
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  )
}
