import { Hateoas } from '../protocol/http.response'

export function CreateHateoasFactory (href: string, method: string, rel: string): Hateoas {
  const hateoas: Hateoas = {
    href,
    method,
    rel
  }
  return hateoas
}
