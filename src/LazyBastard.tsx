import * as React from "react";
import { LazyContext, ContextProps } from "./Provider";
import "./styles.css";

interface Props {
  children: JSX.Element;
  height?: number;
  onLoad?: () => void;
}

export const LazyBastard: React.FC<Props> = ({ children, height = 15 }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const { loader, root, rootMargin, threshold } =
    React.useContext<ContextProps>(LazyContext);
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
          root,
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
    return <div ref={componentRef} />;
  }

  return (
    <>
      <div ref={componentRef} />
      <React.Suspense
        fallback={
          loader || (
            <ul className="lazy-bastard-skeleton-loading">
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
