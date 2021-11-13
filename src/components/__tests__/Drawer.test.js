import React from 'react'
import { render, screen } from '@testing-library/react'

import { Drawer } from '../Drawer'

const defaultProps = {
  onClose: jest.fn(),
  title: 'Drawer Component',
}

describe('Drawer', () => {
  test('should render correctly using the react portal', () => {
    let portalElement = document.getElementById('drawer')
    if (!portalElement) {
      portalElement = document.createElement('div')
      portalElement.setAttribute('id', 'drawer')
      document.body.appendChild(portalElement)
    }

    render(<Drawer {...defaultProps} />)

    const drawerElement = screen.getByTestId('drawer')
    const titleElement = screen.getByText('Drawer Component')

    expect(drawerElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
  })
})
