import { ReactElement } from 'react'
import { AppProps } from '../types/AppProps'
import { publicTagName } from '../utils/consts'
import { getTagPages } from '../utils/requests.client'
import { getTagUrl } from '../utils/url'

interface TagLinkProps {
  pushState(url: string, state: Partial<AppProps>)
  onClick?(tag: string);
  removeTag?(tag: string);
  kind: 'title' | 'small'
  className?: string
  tag: string
}

const classNames = {
  title: 'bg-primary link-light',
  titlePublic: 'bg-success link-light',
  small: 'border border-primary link-primary',
  smallPublic: 'border border-success link-success',
}

export const TagLink = ({ tag, kind, onClick, removeTag, ...props }: TagLinkProps): ReactElement => {
  const kindType = tag === publicTagName ? `${kind}Public` : kind
  const onTagClick = async e => {
    e.preventDefault()
    if (onClick) {
      onClick(tag)
    } else {
      const { href } = e.target
      const { pages } = await getTagPages(href.replace(location.origin + '/tag/', ''))
      if (pages) {
        props.pushState(getTagUrl(tag), { pages, totalCount: pages.length, tag })
      } else {
        location.href = href
      }
    }
  }

  return <a className={'badge rounded-pill mb-2 me-1 text-decoration-none ' + classNames[kindType] + (removeTag ? ' d-flex align-items-center' : '')}
            href={`/tag/${tag}`}
            onClick={onTagClick}>
    {tag}
    {removeTag && <button type="button" key="close" className="btn-close btn-sm remove-tag-button" onClick={e => {
      e.stopPropagation()
      e.preventDefault()
      removeTag(tag)
    }}/>}
  </a>
}
