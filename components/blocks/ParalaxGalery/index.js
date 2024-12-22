'use client';

import { useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';
import ImageViewer from 'react-simple-image-viewer';

const ParalaxGalery = ({ header, images }) => {
  console.log(images, 'imagesimagesimages');
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const title = delve(header, 'title');
  const label = delve(header, 'label');

  const third = Math.ceil(images.data.length / 3);

  const second = Math.ceil(images.data.length / 2);

  const firstPart = images.data.slice(0, third);
  const secondPart = images.data.slice(third, 2 * third);
  const thirdPart = images.data.slice(2 * third);

  const tabletFirstPart = images.data.slice(0, second);
  const tabletSecondPart = images.data.slice(second, 2 * second);

  return (
    <section class="py-4 max-w-screen-2xl mx-auto bg-white overflow-hidden">
      <div class="px-6 md:px-12 ">
        <div className="max-w-4xl mx-auto text-center">
          {title && (
            <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold font-jakarta text-black mb-8">
              {title}
            </h3>
          )}
          {label && (
            <p className="text-lg font-jakarta text-black font-medium mb-10">
              {label}
            </p>
          )}
        </div>
        <div
          className="h-full items-start py-6 md:py-12 max-w-screen-2xl mx-auto overflow-y-auto w-full"
          ref={gridRef}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start mx-auto gap-10 pb-4 lg:pb-40 lg:pt-20 px-6 md:px-12"
            ref={gridRef}
          >
            <div className="gap-10 hidden lg:grid">
              {firstPart.map((el, idx) => (
                <motion.div
                  style={{ y: translateFirst }} // Apply the translateY motion value here
                  key={'grid-1' + idx}
                >
                  <Image
                    className="h-80 w-full object-cover rounded-3xl gap-10 !m-0 !p-0 cursor-pointer"
                    height="400"
                    width="400"
                    onClick={() => openImageViewer(idx)}
                    src={getStrapiMedia(delve(el, 'attributes.url'))}
                    alt={delve(el, 'attributes.alternativeText')}
                  />
                </motion.div>
              ))}
            </div>
            <div className="gap-10 hidden lg:grid">
              {secondPart.map((el, idx) => (
                <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
                  <Image
                    className="h-80 w-full object-cover rounded-3xl gap-10 !m-0 !p-0 cursor-pointer"
                    height="400"
                    width="400"
                    onClick={() => openImageViewer(idx + firstPart.length)}
                    src={getStrapiMedia(delve(el, 'attributes.url'))}
                    alt={delve(el, 'attributes.alternativeText')}
                  />
                </motion.div>
              ))}
            </div>
            <div className="gap-10 hidden lg:grid">
              {thirdPart.map((el, idx) => (
                <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
                  <Image
                    className="h-80 w-full object-cover rounded-3xl gap-10 !m-0 !p-0 cursor-pointer"
                    height="400"
                    width="400"
                    onClick={() => openImageViewer(idx + secondPart.length)}
                    src={getStrapiMedia(delve(el, 'attributes.url'))}
                    alt={delve(el, 'attributes.alternativeText')}
                  />
                </motion.div>
              ))}
            </div>
            <div className="gap-10 hidden md:grid lg:hidden">
              {tabletFirstPart.map((el, idx) => (
                <motion.div
                  style={{ y: translateFirst }} // Apply the translateY motion value here
                  key={'grid-1' + idx}
                >
                  <Image
                    className="h-80 w-full object-cover rounded-3xl gap-10 !m-0 !p-0 cursor-pointer"
                    height="400"
                    width="400"
                    onClick={() => openImageViewer(idx)}
                    src={getStrapiMedia(delve(el, 'attributes.url'))}
                    alt={delve(el, 'attributes.alternativeText')}
                  />
                </motion.div>
              ))}
            </div>
            <div className="gap-10 hidden md:grid lg:hidden">
              {tabletSecondPart.map((el, idx) => (
                <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
                  <Image
                    className="h-80 w-full object-cover rounded-3xl gap-10 !m-0 !p-0 cursor-pointer"
                    height="400"
                    width="400"
                    onClick={() => openImageViewer(idx + firstPart.length)}
                    src={getStrapiMedia(delve(el, 'attributes.url'))}
                    alt={delve(el, 'attributes.alternativeText')}
                  />
                </motion.div>
              ))}
            </div>
            <div className="gap-10 grid md:hidden">
              {images.data.map((el, idx) => (
                <motion.div
                  style={{ y: translateFirst }} // Apply the translateY motion value here
                  key={'grid-1' + idx}
                >
                  <Image
                    className="h-80 w-full object-cover rounded-3xl gap-10 !m-0 !p-0 cursor-pointer"
                    height="400"
                    width="400"
                    onClick={() => openImageViewer(idx)}
                    src={getStrapiMedia(delve(el, 'attributes.url'))}
                    alt={delve(el, 'attributes.alternativeText')}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images.data.map((image) =>
            getStrapiMedia(delve(image, 'attributes.url'))
          )}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}
          closeOnClickOutside={true}
        />
      )}
    </section>
  );
};

export default ParalaxGalery;
