function timeMeasurementsConverter(fromType, toType, time) {
  const hour = 1000 * 60 * 60;
  const minute = hour / 60;
  const second = minute / 60;
  const millisecond = second / 1000;

  // millisecond
  if (fromType === "millisecond" && toType === "second") {
    return `${time * millisecond / second} s`
  }

  if (fromType === "millisecond" && toType === "minute") {
    return `${time * millisecond / minute} m`
  }

  if (fromType === "millisecond" && toType === "hour") {
    return `${(time * millisecond / hour).toFixed(2)} h`
  }
  
  // second
  if (fromType === "second" && toType === "millisecond") {
    return `${time * second}ms`
  }
  if (fromType === "second" && toType === "minute") {
    return `${time * second / minute}m`
  }
  if (fromType === "second" && toType === "hour") {
    return `${(time * second / hour).toFixed(2)}h`
  }

  // minute
  if (fromType === "minute" && toType === "millisecond") {
    return `${time * minute}ms`
  }
  
  if (fromType === "minute" && toType === "second") {
    return `${time * minute / second}s`
  }

  if (fromType === "minute" && toType === "hour") {
    return `${(time * minute / hour).toFixed(2)}h`
  }

  // hour 
  if (fromType === "hour" && toType === "millisecond") {
    return `${time * hour}ms`
  }

  if (fromType === "hour" && toType === "second") {
    return `${time * hour / second}s`
  }

  if (fromType === "hour" && toType === "minute") {
    return `${time * hour / minute}m`
  }
}


console.log(timeMeasurementsConverter("millisecond", "hour", 12000000));

console.log(timeMeasurementsConverter("second", "hour", 7200));

console.log(timeMeasurementsConverter("minute", "hour", 120));

console.log(timeMeasurementsConverter("hour", "minute", 1));