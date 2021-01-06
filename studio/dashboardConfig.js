export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff5a0ba4534ceddd053f96b',
                  title: 'Sanity Studio',
                  name: 'korttrakkerene-no-studio',
                  apiId: '418ba532-7da6-4f68-8c59-33c9862960cb'
                },
                {
                  buildHookId: '5ff5a0bacc3834d0cdf5b89a',
                  title: 'Blog Website',
                  name: 'korttrakkerene-no',
                  apiId: 'd7808e08-252b-4bec-b126-5fda8688da69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/larserikfinholt/korttrakkerene.no',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://korttrakkerene-no.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
