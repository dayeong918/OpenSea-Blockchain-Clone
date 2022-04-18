import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '1n0eimn1',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk7u4rtZiYVJYJderyYVmliDjbF3Sg7HNzQJ7OE5Epw5Oov4KKimJ9ZcpzwlwscwlnGzEYbSSk27rtYG9XIlX5cCqQmYKnXACN0dic3Xzw8thr6PkIQ9l95y3ep9FEfxAWgbFLzIEZZCck2poYSIvuqZkgXbdvEnY3OtgCGQb3HWIy4GYmyI',  
    useCdn: false
})

