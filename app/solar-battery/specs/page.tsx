// app/solar-battery/specs/page.tsx
import fs from 'fs'
import path from 'path'
import SpecsClient from './SpecsClient'

const introPath  = path.join(process.cwd(), 'app/markdown/drill-rig-intro.md')
const detailPath = path.join(process.cwd(), 'app/markdown/drill-rig-details.md')
const specsPath  = path.join(process.cwd(), 'app/markdown/cr15-full-specs.md')

const introMd    = fs.readFileSync(introPath, 'utf8')
const detailMd   = fs.readFileSync(detailPath, 'utf8')
const specsTable = fs.readFileSync(specsPath, 'utf8')

export default function Page() {
  return <SpecsClient mdContent={introMd} detailMd={detailMd} specsTable={specsTable} />
}