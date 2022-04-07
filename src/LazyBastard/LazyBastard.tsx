import * as React from "react";
import { ThemeContext } from "./Provider";
import "./styles.scss";

interface Props {
  children: JSX.Element;
  height?: number;
}

export const LazyBastard: React.FC<Props> = ({ children, height = 15 }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const { loader, rootMargin, threshold } = React.useContext(ThemeContext);
  const componentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let intersectionObserver: IntersectionObserver;

    const unobserve = () => {
      if (intersectionObserver && componentRef.current) {
        intersectionObserver.unobserve(componentRef.current);
      }
    };

    if (componentRef.current) {
      intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].intersectionRatio <= 0) {
            return;
          }

          setIsVisible(true);
          unobserve();
        },
        {
          rootMargin,
          threshold,
        }
      );

      intersectionObserver.observe(componentRef.current);

      return () => {
        unobserve();
      };
    }
  }, [componentRef, rootMargin, threshold]);

  const segments: number = Math.floor(height / 26) || 1;

  if (!isVisible) {
    return <div ref={componentRef} style={{ height }} />;
  }

  return (
    <>
      <div ref={componentRef} />
      <React.Suspense
        fallback={
          loader || (
            <ul className="lazy-bastard">
              {Array(segments)
                .fill(null)
                .map((_: any, index: number) => (
                  <li key={index} />
                ))}
            </ul>
          )
        }
      >
        {children}
      </React.Suspense>
    </>
  );
};
