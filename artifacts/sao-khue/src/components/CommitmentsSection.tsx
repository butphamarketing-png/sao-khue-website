import { motion } from "framer-motion";
import {
  Award,
  Clock,
  DollarSign,
  FileX2,
  MapPin,
  Shield,
  ThumbsUp,
  Users,
  Zap,
} from "lucide-react";
import { useCommitments } from "@/lib/site-settings";

const iconMap = {
  shield: Shield,
  "thumbs-up": ThumbsUp,
  clock: Clock,
  "map-pin": MapPin,
  "dollar-sign": DollarSign,
  users: Users,
  award: Award,
  zap: Zap,
  "file-x-2": FileX2,
} as const;

export function CommitmentsSection() {
  const commitments = useCommitments();

  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\\"60\\" height=\\"60\\" viewBox=\\"0 0 60 60\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cg fill=\\"none\\" fill-rule=\\"evenodd\\"%3E%3Cg fill=\\"%23ffffff\\" fill-opacity=\\"1\\"%3E%3Cpath d=\\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
            9 Cam ket vang cua Sao Khue
          </h2>
          <div className="mx-auto h-1 w-24 rounded bg-accent"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/80">
            Su an tam cua khach hang la thuoc do thanh cong cua chung toi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commitments.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Shield;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex items-start gap-4 rounded-lg border border-white/10 bg-white/10 p-6 transition-all duration-300 hover:bg-white/20"
              >
                <div className="shrink-0 rounded-full bg-white p-3 text-accent transition-transform group-hover:scale-110">
                  <Icon size={32} />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold uppercase tracking-wide">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
