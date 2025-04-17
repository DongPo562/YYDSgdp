import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'
import ElementPlus from 'element-plus'

describe('App.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [ElementPlus]
      }
    })
    
    // Check if the component renders
    expect(wrapper.exists()).toBe(true)
    
    // Check if the main container exists
    expect(wrapper.find('.main-container').exists()).toBe(true)
    
    // Check if the left and right containers exist
    expect(wrapper.find('.main-left-container').exists()).toBe(true)
    expect(wrapper.find('.main-right-container').exists()).toBe(true)
    
    // Check if the buttons container exists and has 6 buttons
    const buttonContainer = wrapper.find('.main-left-button-container')
    expect(buttonContainer.exists()).toBe(true)
    expect(buttonContainer.findAll('.action-button').length).toBe(6)
    
    // Check if the text container exists
    expect(wrapper.find('.main-left-text-container').exists()).toBe(true)
    expect(wrapper.find('.format-text').exists()).toBe(true)
    
    // Check if the image container exists and has an image
    const imageContainer = wrapper.find('.image-container')
    expect(imageContainer.exists()).toBe(true)
    expect(imageContainer.find('img').exists()).toBe(true)
    expect(imageContainer.find('img').attributes('src')).toBe('/logos/holdPlace.png')
    expect(imageContainer.find('img').attributes('alt')).toBe('占位图')
    
    // Check if the tip container exists
    expect(wrapper.find('.tip-container').exists()).toBe(true)
  })
})
