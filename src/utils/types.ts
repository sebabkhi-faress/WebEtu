export type ProfileDataType = {
  individuId: string
  individuNomArabe: string
  individuNomLatin: string
  individuPrenomArabe: string
  individuPrenomLatin: string
  individuDateNaissance: string
  individuLieuNaissance: string
  individuLieuNaissanceArabe: string
  individuEmail: string
}
export enum ErrorMessages {
  FetchingError = "Error Fetching Data",
  ServerError = "serverDown",
  NetworkError = "connection",
}

export type ApiResponseType = {
  success: boolean
  data: ProfileDataType | undefined
  error: string | undefined
}
