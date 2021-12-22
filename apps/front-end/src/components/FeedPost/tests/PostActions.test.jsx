import React from 'react'
import ReactDOM from 'react-dom'
import {act , isElementOfType} from 'react-dom/test-utils'


describe("PostActions Component", ()=> {
    let PostActions, container
    beforeEach(async ()=> {
        vi.mock('../PostActions/ActionLike.jsx')
        vi.mock('../PostActions/ActionAddComment.jsx')
        vi.mock('../PostActions/ActionShare.jsx')
        vi.mock('../PostActions/ActionEpandMore.jsx')

        container = document.createElement('div')

        document.body.innerHTML= ''
        document.body.appendChild(container)

        PostActions = (await import('../PostActions.jsx')).default
    }) 

    test('should exist' , () => {
        expect(PostActions).toBeTruthy()
        expect(typeof(PostActions)).toBe('function')
    })

    test('should be rendered', () => {
        act(() => {
            ReactDOM.render(<PostActions />, container)
        })
        expect(container).toMatchSnapshot()
    })

    test('should be expended', () => {
        act(() => {
            ReactDOM.render(<PostActions expanded={true} />, container)
        })
        expect(container.querySelector('.action-expand-more-mock').getAttribute('data-expanded')).toBe('true')
    })

    test('should not be expended', () => {
        act(() => {
            ReactDOM.render(<PostActions expanded={false} />, container)
        })
        expect(container.querySelector('.action-expand-more-mock').getAttribute('data-expanded')).toBe('false');
    })

    test('should call setExpanded when emitted from ActionExpandMore', () => {
        const expandedCallback = vi.fn()
        
        act(() => {
            ReactDOM.render(<PostActions expanded={false} setExpanded ={expandedCallback}/>, container)
        })
       expect(expandedCallback).not.toBeCalled()

       container.querySelector('.action-expand-more-mock').click()
       expect(expandedCallback).toBeCalledTimes(1)
    })

})