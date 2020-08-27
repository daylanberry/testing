import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'fetched 1'}, { name: 'fetched 2'}]
  })
});

afterEach(() => {
  moxios.uninstall()
});

it('can fetch a list of comments and display then', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapped.update();

    console.log(wrapped.find('li').length)
    expect(wrapped.find('li').length).toEqual(1)
    done()
  });

})