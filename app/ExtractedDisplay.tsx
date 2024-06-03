export default function ExtractedDisplay({title, value, confidence}:{title: string, value: string, confidence: number}) {
    return (
        <div className={confidence < 0.90 ? "border-2 border-yellow-400 rounded mb-2" : "mb-2"}>
          <p className="text-xl font-bold">{title}:</p>
          <p>Value: {value}</p>
          <p>Confidence: {confidence}</p>
        </div>
    )
}