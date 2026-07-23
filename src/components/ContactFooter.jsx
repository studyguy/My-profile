import { useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Mail, ArrowUp, Copy, Check, X } from 'lucide-react'
import { useState } from 'react'
import { personalInfo } from '../data/placeholder'

export default function ContactFooter() {
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)
  const [qrZoomed, setQrZoomed] = useState(false)
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

        {/* WeChat QR Code */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mb-12"
        >
          <button
            onClick={() => setQrZoomed(true)}
            className="inline-flex flex-col items-center gap-3 px-8 py-6 rounded-3xl glass card-hover cursor-pointer"
            aria-label="点击放大二维码"
          >
            <img src="/My-profile/QRcode.png" alt="微信二维码" className="w-32 h-32 rounded-lg" />
            <span className="text-zinc-400 text-sm">扫码添加微信</span>
          </button>
        </motion.div>

        {/* QR Code Zoom Modal */}
        <AnimatePresence>
          {qrZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setQrZoomed(false)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-zinc-900 rounded-3xl p-8 max-w-sm mx-4 shadow-2xl"
              >
                <button
                  onClick={() => setQrZoomed(false)}
                  className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-200 transition-colors"
                  aria-label="关闭"
                >
                  <X size={20} />
                </button>
                <img src="/My-profile/QRcode.png" alt="微信二维码" className="w-72 h-72 rounded-2xl" />
                <p className="text-center text-zinc-300 mt-4 text-base">扫码添加微信</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

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
