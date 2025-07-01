const Comment = ({ text = '', isActive = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    if (!text || typeof text !== 'string' || !isActive) return;

    let index = 0;
    let typingInterval;
    let hideTimeout;

    setDisplayedText('');
    setShowBubble(true);

    typingInterval = setInterval(() => {
      if (index < text.length) {
        const nextChar = text[index];
        if (nextChar !== undefined) {
          setDisplayedText((prev) => prev + nextChar);
        }
        index++;
      } else {
        clearInterval(typingInterval);
        hideTimeout = setTimeout(() => {
          setShowBubble(false);
        }, 5000);
      }
    }, 50);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(hideTimeout);
    };
  }, [text, isActive]);

  // Reset kalau bubble dinonaktifkan
  useEffect(() => {
    if (!isActive) {
      setDisplayedText('');
      setShowBubble(false);
    }
  }, [isActive]);

  return (
    <AnimatePresence mode="wait">
      {showBubble && isActive && (
        <motion.div
          key={text}
          variants={bubbleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
        >
          <div className="relative bg-white text-black px-4 py-2 rounded-xl shadow-lg max-w-[250px] sm:max-w-sm text-sm sm:text-base mr-8">
            <span>{displayedText}</span>
            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white rotate-45 shadow-sm"></div>
          </div>

          <img
            src={Wolf}
            alt="Wolf Character"
            className="w-14 sm:w-20 drop-shadow-xl"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
