export interface Hateoas {
  href: string
  method: string
  rel: string
}

export interface HttpResponse<T> {
  currentPage?: number
  countPage?: number
  countRegistries?: number
  nextPage?: string
  prevPage?: string
  data: T[] | T
  links: Hateoas[]
}
