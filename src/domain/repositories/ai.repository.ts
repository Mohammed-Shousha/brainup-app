export default interface IAiRepository {
  getResponse(message: string): Promise<string>;
}
