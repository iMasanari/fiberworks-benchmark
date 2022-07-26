import { createEventBridge } from '@imasanari/fiberworks'
// import classes from './SearchBox.module.css'

type Props = {
  /**
   * current input
   */
  input: string;
  /**
   * onChange handler
   */
  onChange: (input: string) => void;
};

const change = createEventBridge((e: Event) => {
  const target = e.currentTarget as HTMLInputElement

  return target.value
})

export const SearchBox = ({ input, onChange }: Props) => {
  return (
    <div className="SearchBox-wrapper">
      <input
        className="SearchBox-input"
        value={input}
        onInput={change(onChange)}
      />
    </div>
  )
}
