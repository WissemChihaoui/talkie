function dateConverter(x){
    const dateString = x;

const date = new Date(dateString);
const currentTime = new Date();

const timeDifferenceInMs = currentTime - date;

if (timeDifferenceInMs < 60000) { // Less than a minute (60000 milliseconds)
  const timeDifferenceInSeconds = Math.floor(timeDifferenceInMs / 1000);
  return(`${timeDifferenceInSeconds} seconds`);
} else if (timeDifferenceInMs < 3600000) { // Less than an hour (3600000 milliseconds)
  const timeDifferenceInMinutes = Math.floor(timeDifferenceInMs / (1000 * 60));
  return(`${timeDifferenceInMinutes} minutes`);
} else if (timeDifferenceInMs < 86400000) { // Less than 24 hours (86400000 milliseconds)
  const timeDifferenceInHours = Math.floor(timeDifferenceInMs / (1000 * 60 * 60));
  return(`${timeDifferenceInHours} hours`);
} else {
  const timeDifferenceInDays = Math.floor(timeDifferenceInMs / (1000 * 60 * 60 * 24));
  return(`${timeDifferenceInDays} days`);
}

}