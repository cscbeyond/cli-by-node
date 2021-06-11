export default () => {
  return {
    type: 'input',
    name: 'packageName',
    message: '项目名？',
    validate(val) {
      if (val) return true;
      return 'please enter package name'
    }
  }
}