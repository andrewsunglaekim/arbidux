const timerHelper = {
  getElapsedTime: (baseTime, startedAt, stoppedAt = new Date().getTime()) => {
    if (!startedAt) {
      return 0;
    } else {
      return stoppedAt - startedAt + baseTime;
    }
  }
}

export default timerHelper
