import { Cards, Columns } from './types'

export const initialCards: Cards = {
  [Columns.TODO]: [
    {
      id: 1,
      imgUrls: ['/linear.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Linear',
      time: 'Tomorrow',
      content: 'Streamline project',
    },

    {
      id: 2,
      imgUrls: ['/tesla.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Tesla',
      time: '2 days ago',
      content: 'Cheer up team members',
    },
  ],
  [Columns.ACTIVE_REQUESTS]: [
    {
      id: 1,
      imgUrls: ['/slack.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Slack',
      time: '1 min ago',
      content: 'Rebuild landing page',
    },
    {
      id: 2,
      imgUrls: ['/invision.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'InVision',
      time: 'Yesterday',
      content: 'Optimize design experience',
    },
    {
      id: 3,
      imgUrls: ['/linear.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Linear',
      time: '4 days ago',
      content: 'Streamline project',
    },
    {
      id: 4,
      imgUrls: ['/tesla.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Tesla',
      time: '2 weeks ago',
      content: 'Brand design kit',
    },
  ],
  [Columns.FEEDBACKS]: [
    {
      id: 1,
      imgUrls: ['/linear.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Linear',
      time: '4 min ago',
      content: 'Streamline project',
    },
    {
      id: 2,
      imgUrls: ['/tesla.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Tesla',
      time: 'Today',
      content: 'Deploy project',
    },
    {
      id: 3,
      imgUrls: ['/slack.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Slack',
      time: 'Yesterday',
      content: 'Streamline project',
    },
  ],
  [Columns.APPROVALS]: [
    {
      id: 1,
      imgUrls: ['/linear.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Linear',
      time: 'Tomorrow',
      content: 'Design system',
    },
    {
      id: 2,
      imgUrls: ['/invision.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'InVision',
      time: 'Yesterday',
      content: 'Case study',
    },
    {
      id: 3,
      imgUrls: ['/stripe.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Linear',
      time: '2 days ago',
      content: 'Streamline project',
    },
    {
      id: 4,
      imgUrls: ['/norton.png', '/designer-orman.png', '/designer-james.png'],
      clientName: 'Norton',
      time: '4 days ago',
      content: 'Logo redesign',
    },
  ],
}
