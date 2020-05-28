<script>
export default {
  name: 'GIcon',
  functional: true,
  props: {
    size: {
      type: String,
      default: '24px'
    },
    color: {
      type: String,
      default: 'gray-800'
    }
  },
  render(h, { props, children, data }) {
    const iconName = children && children[0].text.trim()
    const svgData = {
      class: [data.staticClass],
      attrs: {
        width: props.size,
        height: props.size,
        viewBox: '0 0 24 24',
        xmlns: 'http://www.w3.org/2000/svg',
        role: 'img',
        'aria-hidden': 'true'
      }
    }
    const pathData = {
      attrs: {
        d: iconName,
        fill: 'currentColor'
      }
    }
    return h('svg', svgData, [h('path', pathData)])
  }
}
</script>
