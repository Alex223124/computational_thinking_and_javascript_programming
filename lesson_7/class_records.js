var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89, 88],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  var scoreData = Object.keys(scores).map(function(student) {
    return scores[student].scores;
  });

  var examData = scoreData.map(function(score) {
    return score.exams;
  });

  return {
    studentGrades: scoreData.map(function(scoreObj){
      return getStudentScore(scoreObj);
    }),
    exams: getExamSummary(examData)
  }
}

function getStudentScore(scoreObj) {
  var lookUpLetter = function(percentageGrade) {
    if (percentageGrade >= 93) {
      return "A";
    } else if (percentageGrade >= 85 && percentageGrade < 93) {
      return "B";
    } else if (percentageGrade >= 77 && percentageGrade < 85) {
      return "C";
    } else if (percentageGrade >= 69 && percentageGrade < 77) {
      return "D";
    } else if (percentageGrade >= 60 && percentageGrade < 69) {
      return "E";
    } else {
      return "F";
    }
  }

  var examsAvg = computeExamsAverage(scoreObj.exams);
  var exercisesAvg = computeExercisesScore(scoreObj.exercises);
  var percentageGrade = Math.round(examsAvg * .65 + exercisesAvg * .35);

  return percentageGrade + " (" + lookUpLetter(percentageGrade) + ")";
}

function computeExamsAverage(exams) {
  return exams.reduce(function(total, score) {
    return total + score;
  }) / exams.length;
}

function computeExercisesScore(exercises) {
  return exercises.reduce(function(total, score) {
    return total + score;
  });
}

function getExamSummary(examScoresPerStudent) {
  var scoresPerExam = transpose(examScoresPerStudent);

  return scoresPerExam.map(function(examScores) {
    return {
      average: getExamAverage(examScores),
      minimum: getExamMinimum(examScores),
      maximum: getExamMaximum(examScores)
    }
  });
}

function transpose(array) {
  return array[0].map(function(col, columnIdx) {
    return array.map(function(row) {
        return row[columnIdx];
    });
  });
}

function getExamAverage(scores) {
  return scores.reduce(function(total, score) {
    return total + score;
  }) / scores.length;
}

function getExamMinimum(scores) {
  return scores.reduce(function(min, score) {
    return min <= score ? min : score;
  });
}

function getExamMaximum(scores) {
  return scores.reduce(function(max, score) {
    return max >= score ? max : score;
  });
}

generateClassRecordSummary(studentScores);
