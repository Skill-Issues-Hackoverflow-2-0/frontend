import { HoverEffect } from '../ui/card-hover-effect'

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}
export const projects = [
  {
    title: 'Smart Routing',
    description:
      'Our GPS-enabled sensors track every vehicle in real-time, ensuring seamless traffic flow and minimal congestion',
  },
  {
    title: 'Crime Detection Assistance',
    description:
      'Leveraging location history data, our platform aids law enforcement agencies in crime detection and prevention.',
  },
  {
    title: 'Bill Generation',
    description:
      'A Bill of all the traffic signals that a citizen breaks will be generated and is notified to the person through our dashboard.',
  },
  {
    title: 'Subscription Services',
    description:
      "Governments can subscribe to our services, gaining access to our comprehensive suite of smart city solutions. We handle maintenance and support, ensuring our systems run seamlessly 24/7.",
  },
]
