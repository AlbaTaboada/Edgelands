import { select } from 'd3'

const space = '&nbsp;'
const line = '—————————————'
const block = '<span class="block"></span>'


export function click(e) {

    // console.log(e)

    select('#focus').remove() // Delete previous focus

    const focus = select('body').append('div').attr('id', 'focus')


    // Heading

    focus.append('h2').html('MIT Technology Review')
    focus.append('h2').html('Release Date: ' + e.publish_date)
    focus.append('p').html(line)
    focus.append('h1').html(e.title)
    // focus.append('p').html(line)
    focus.append('h2').html(`<a href=${e.url} target="_blank">Reference Link</a>`)


    // Frequency by Year

    // focus.append('p').html(space)
    // focus.append('h2').html('Frequency by Year')
    

    // Object.entries(e.years_JSON)
    //     .forEach(([key, value]) => {
    //         const blocks = block.repeat(value)
    //         focus.append('p').html(`${key}&#9${blocks}`)
    //     })

    // // URLs

    // focus.append('p').html(space)
    // focus.append('h2').html(`10/${e.urls.length} Random URLs`)
    // focus.append('p').html(line)

    // e.urls
    //     .slice(0, 10) // Get first 10 URLs
    //     // .sort(() => Math.random() - Math.random()).slice(0, 10) // Get 10 random URLs
    //     .forEach(url => {
    //         focus.append('p').html(`<a href='${url}' target="_blank">${url} </a>`)
    //     })

}