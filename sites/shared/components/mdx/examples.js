import { Tutorial } from '@freesewing/tutorial'
import Svg from '../workbench/draft/svg'
import Defs from '../workbench/draft/defs'
import Stack from '../workbench/draft/stack'
import { useGist } from 'shared/hooks/useGist'

const measurementSets = {
  tutorial: {
    head: 320,
  },
}
const ExamplesComponent = ({ app, part, xray = false }) => {
  // State for gist
  const { gist, unsetGist, updateGist } = useGist('examples-mdx', app)

  if (xray) {
    gist._state.xray = { enabled: true }
    gist.margin = 20
  }
  const measurements = part.includes('tutorial') ? measurementSets.tutorial : {}
  const draft = new Tutorial({
    only: [part],
    measurements,
  })
  const patternProps = draft.draft().getRenderProps()
  if (draft.store.logs.error.length > 0 || draft.setStores[0].logs.error.length > 0)
    return (
      <div className="max-w-full p-4">
        <pre>{draft.store.logs.error.join('\n')}</pre>
        <pre>{draft.setStores[0].logs.error.join('\n')}</pre>
      </div>
    )

  return (
    <Svg {...patternProps} embed={true}>
      <Defs {...patternProps} />
      <style>{`:root { --pattern-scale: 1} ${patternProps.svg.style}`}</style>
      <g>
        {Object.keys(patternProps.stacks).map((stackName) => (
          <Stack
            {...{ app, gist, updateGist, unsetGist, patternProps }}
            showInfo={app.setPopup}
            key={stackName}
            stackName={stackName}
            stack={patternProps.stacks[stackName]}
          />
        ))}
      </g>
    </Svg>
  )
}

export default ExamplesComponent
