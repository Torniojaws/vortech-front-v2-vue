/**
 * Convert seconds to MM:SS format. We'll never have values with hours, so just MM:SS is ok
 * @param {int} s is the seconds we convert
 * @return {string} the resulting value
 */
const formatSeconds = sec => {
  let minutes = Math.floor(sec / 60)
  let seconds = sec % 60
  if (minutes < 10) minutes = '0' + minutes
  if (seconds < 10) seconds = '0' + seconds
  return `${minutes}:${seconds}`
}

export default {
  formatSeconds
}
