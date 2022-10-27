export class Rule {
  constructor(private name: string, private rule: (number) => boolean) {
  }
}
