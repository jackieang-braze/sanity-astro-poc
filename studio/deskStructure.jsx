
export const myStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      
      S.listItem()
        .title('Certification Exams')
        .child(S.documentTypeList('certificationExam')),
      S.listItem()
        .title('Learning Paths')
        .child(S.documentTypeList('learningPathway')),
    ])


export const pageStructure = (S) =>
  S.list()
    .title('Pages')
    .items([
      S.listItem()
        .title('Pages')
        .child(S.documentTypeList('page')),
      
    ])
