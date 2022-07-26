import { createApp } from '@imasanari/fiberworks/client'
import './index.css'
import './App.css'
import './components/Item/Item.css'
import './components/SearchBox/SearchBox.css'

const worker = new Worker(new URL('./worker.tsx', import.meta.url), {
  type: 'module',
})

const app = createApp(worker, document.getElementById('root')!)

app.render({ dataSetRepeat: 1 })

globalThis.setDataSetRepeatSize = (dataSetRepeat: number) => {
  app.render({ dataSetRepeat })
}
