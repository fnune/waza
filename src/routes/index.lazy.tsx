import { createLazyFileRoute } from '@tanstack/react-router'
import { Vocabulary } from '~/components/content/Vocabulary'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Vocabulary />
}
