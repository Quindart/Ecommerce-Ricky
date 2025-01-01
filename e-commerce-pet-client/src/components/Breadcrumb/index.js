import { Icon } from '@iconify/react'
import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const Breadcrumb = (props) => {
  const { targetFormat, list, className, ...res } = props

  const location = useLocation()
  let currentLink = ''

  const formatCrumb = (crumb, targetFormat) => {
    if (targetFormat === 'snake') {
      return crumb.replace(/_/g, ' ').toLowerCase()
    } else if (targetFormat === 'camel') {
      return crumb.replace(/[-_\s]([a-zA-Z])/g, (match, group) =>
        group.toUpperCase()
      )
    } else if (targetFormat === 'underscore') {
      return crumb.replace(/[-\s]/g, '_')
    } else {
    }
    return crumb
  }

  // const crumbs = location.pathname
  //   .split('/')
  //   .filter((crumb) => crumb !== '')
  //   .map((crumb, index, array) => {
  //     currentLink += `/${crumb}`
  //     return (
  //       <li className="breadcrumbs__item" key={crumb}>
  //         <Link to={currentLink}>
  //           {index === array.length - 1
  //             ? formatCrumb(crumb, targetFormat)
  //             : `${formatCrumb(crumb)} `}
  //         </Link>
  //         {index < array.length - 1 && (
  //           <Icon icon="iconamoon:arrow-right-2-bold" />
  //         )}
  //       </li>
  //     )
  //   })
    const crumbs = list && list?.map((crumb, index, array) => {
      currentLink += `/${crumb}`
      return (
        <li className="breadcrumbs__item" key={crumb}>
          <Link to={crumb.href}>
            {/* {index === array.length - 1
                              ? formatCrumb(crumb, targetFormat)
                              : `${formatCrumb(crumb)} `} */}
            {crumb.name}
          </Link>
          {index < array.length - 1 && (
            <Icon icon="iconamoon:arrow-right-2-bold" />
          )}
        </li>
      )
    })
  return (
    <>
      {crumbs?.length > 0 && (
        <div className={className} targetFormat={targetFormat} {...res}>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={'/'}>Home</Link>
                <Icon icon="iconamoon:arrow-right-2-bold" />
              </li>
              {crumbs}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Breadcrumb
